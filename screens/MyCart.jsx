import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLOURS, Items } from "../assets/database/Database";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MyCartItems from "./MyCartItems";
import CreditCardInfo from "../components/CreditCardInfo";
import DeliveryInformation from "../components/DeliveryInformation";

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
      //const data = await AsyncStorage.getItem('cartItems')
      Alert.alert(JSON.stringify(product));

      console.log(product);
      //await AsyncStorage.removeItem('cartItems');
    } catch (error) {
      return error;
    }

    ToastAndroid.show("Items will be Deliverd SOON!", ToastAndroid.SHORT);

    navigation.navigate("Home");
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

const styles = {
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: COLOURS.white,
    position: "relative",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    paddingTop: 16,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerBackButton: {
    fontSize: 18,
    color: COLOURS.backgroundDark,
    padding: 12,
    backgroundColor: COLOURS.backgroundLight,
    borderRadius: 12,
  },
  headerTitle: {
    fontSize: 14,
    color: COLOURS.black,
    fontWeight: "400",
  },
  cartTitle: {
    fontSize: 20,
    color: COLOURS.black,
    fontWeight: "500",
    letterSpacing: 1,
    paddingTop: 20,
    paddingLeft: 16,
    marginBottom: 10,
  },
  productContainer: {
    paddingHorizontal: 16,
  },
  deliveryLocationTitle: {
    fontSize: 16,
    color: COLOURS.black,
    fontWeight: "500",
    letterSpacing: 1,
    marginBottom: 20,
  },
  paymentMethodTitle: {
    fontSize: 16,
    color: COLOURS.black,
    fontWeight: "500",
    letterSpacing: 1,
    marginBottom: 20,
  },
  orderInfoTitle: {
    fontSize: 16,
    color: COLOURS.black,
    fontWeight: "500",
    letterSpacing: 1,
    marginBottom: 20,
  },
  totalRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  totalLabel: {
    fontSize: 12,
    fontWeight: "400",
    maxWidth: "80%",
    color: COLOURS.black,
    opacity: 0.5,
  },
  totalValue: {
    fontSize: 12,
    fontWeight: "400",
    color: COLOURS.black,
    opacity: 0.8,
  },
  checkoutButtonContainer: {
    position: "absolute",
    bottom: 10,
    height: "8%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  checkoutButton: {
    width: "86%",
    height: "90%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  checkoutButtonText: {
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 1,
    color: COLOURS.white,
    textTransform: "uppercase",
  },
};