import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  Alert,
  StyleSheet
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLOURS, Items } from "../assets/database/Database";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MyCartItems from "./MyCartItems";
import CreditCardInfo from "../components/CreditCardInfo";
import DeliveryInformation from "../components/DeliveryInformation";
import orderService from "../api/orderService";
import styles from "../styles/Cart.style";

const MyCart = ({ navigation }) => {
  const [product, setProduct] = useState();
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  const getDataFromDB = async () => {
    let items = await AsyncStorage.getItem("cartItems");
    items = JSON.parse(items);
    let productData = [];
    if (items) {
      Items.forEach((data) => {
        if (items.includes(data.id)) {
          const newData = { ...data, quantity: 1 };
          productData.push(newData);
          return;
        }
      });
      setProduct(productData);
      getTotal(productData);
    } else {
      setProduct(false);
      getTotal(false);
    }
  };

  //get total price of all items in the cart
  const getTotal = (productData) => {
    let total = 0;
    for (let index = 0; index < productData.length; index++) {
      let productPrice = productData[index].productPrice;
      total = total + productPrice;
    }
    setTotal(total);
  };

  //get new total price after quantity is added
  const getNewTotal = (productData) => {
    let total = 0;
    for (let index = 0; index < productData.length; index++) {
      let productPrice =
        productData[index].productPrice * productData[index].quantity;
      total = total + productPrice;
    }
    setTotal(total);
  };

  //remove data from Cart
  const removeItemFromCart = async (id) => {
    let itemArray = await AsyncStorage.getItem("cartItems");
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      for (let index = 0; index < array.length; index++) {
        if (array[index] == id) {
          array.splice(index, 1);
        }

        await AsyncStorage.setItem("cartItems", JSON.stringify(array));
        getDataFromDB();
      }
    }
  };

  //checkout
  const checkOut = async () => {
    try {
      await orderService.addOrder({ totalAmount: total });
      await AsyncStorage.removeItem('cartItems');
      ToastAndroid.show("Items will be Delivered SOON!", ToastAndroid.SHORT);
      navigation.navigate("Bottom Navigation");
    } catch (error) {
      console.error(error);
      ToastAndroid.show("An error occurred during checkout.", ToastAndroid.LONG);
    }
  };

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCartItems = product.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    getNewTotal(updatedCartItems);
    setProduct(updatedCartItems);
  };

  const renderProducts = (data, index) => {
    return (
      <MyCartItems
        removeItemFromCart={removeItemFromCart}
        updateQuantity={updateQuantity}
        data={data}
      />
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="chevron-left"
              style={styles.headerBackButton}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Order Details</Text>
          <View></View>
        </View>
        <Text style={styles.cartTitle}>My Cart</Text>
        <View style={styles.productContainer}>
          {product ? product.map(renderProducts) : null}
        </View>
        <View style={styles.productContainer}>
          <Text style={styles.deliveryLocationTitle}>Delivery Location</Text>
          <DeliveryInformation />
        </View>
        <View style={styles.productContainer}>
          <Text style={styles.paymentMethodTitle}>Payment Method</Text>
          <CreditCardInfo />
        </View>
        <View style={styles.productContainer}>
          <Text style={styles.orderInfoTitle}>Order Info</Text>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Subtotal</Text>
            <Text style={styles.totalValue}>Rs : {total}.00</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Shipping Tax</Text>
            <Text style={styles.totalValue}>Rs : {total / 20}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>Rs : {total + total / 20}</Text>
          </View>
        </View>
      </ScrollView>
  
      <View style={styles.checkoutButtonContainer}>
        {total > 10000 ? (
          <TouchableOpacity
            onPress={() => (total !== 0 ? checkOut() : null)}
            style={{
              ...styles.checkoutButton,
              backgroundColor: COLOURS.red,
            }}
          >
            <Text style={styles.checkoutButtonText}>
              Request permission (Rs : {total + total / 20})
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => (total !== 0 ? checkOut() : null)}
            style={{
              ...styles.checkoutButton,
              backgroundColor: COLOURS.blue,
            }}
          >
            <Text style={styles.checkoutButtonText}>
              CHECKOUT (Rs : {total + total / 20})
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
  
 
};

export default MyCart;