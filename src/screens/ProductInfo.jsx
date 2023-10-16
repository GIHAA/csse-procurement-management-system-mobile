import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated,
  ToastAndroid,
} from "react-native";
import { COLOURS, Items } from "../assets/database/Database";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles/ProductInfo.style";

const ProductInfo = ({ route, navigation  }) => {

  const { productID, seller } = route.params;
  const [product, setProduct] = useState({});
  const width = Dimensions.get('window').width;
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromDB();
    });
    return unsubscribe;
  }, [navigation]);

  const getDataFromDB = async () => {
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].id == productID) {
        await setProduct(Items[index]);
        return;
      }
    }
  };

  const addToCart = async (id, seller) => {
   
    let itemArray = await AsyncStorage.getItem("cartItems");
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      array.push(id);
      try {
        await AsyncStorage.setItem("cartItems", JSON.stringify(array));
        ToastAndroid.show(
          "Item Added Successfully to cart",
          ToastAndroid.SHORT
        );
        navigation.navigate("Store", {seller});
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push(id);
      try {
        await AsyncStorage.setItem("cartItems", JSON.stringify(array));
        ToastAndroid.show(
          "Item Added Successfully to cart",
          ToastAndroid.SHORT
        );
        navigation.navigate("Store", {seller});
      } catch (error) {
        return error;
      }
    }
  };

  const renderProduct = ({ item, index }) => {
    return (
      <View
        style={{
          width: width,
          height: 240,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={{ uri: item }} style={styles.productImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={COLOURS.backgroundLight}
        barStyle="dark-content"
      />
      <ScrollView>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack("Home")}>
            <Entypo name="chevron-left" style={styles.backButton} />
          </TouchableOpacity>
          <FlatList
            data={product.productImageList ? product.productImageList : null}
            horizontal
            renderItem={renderProduct}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            snapToInterval={width}
            bounces={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
          />
          <View style={styles.paginationContainer}>
            {product.productImageList
              ? product.productImageList.map((data, index) => {
                  let opacity = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0.2, 1, 0.2],
                    extrapolate: "clamp",
                  });
                  return (
                    <Animated.View
                      key={index}
                      style={{ ...styles.paginationBar, opacity }}
                    />
                  );
                })
              : null}
          </View>
        </View>
        <View style={styles.productInfoContainer}>
          <View style={styles.productInfoHeader}>
            <Entypo name="shopping-cart" style={styles.cartIcon} />
            <Text style={styles.shoppingText}>Shopping</Text>
          </View>
          <View style={styles.productInfoTitleContainer}>
            <Text style={styles.productInfoTitle}>{product.productName}</Text>
          </View>
          <Text style={styles.productDescription}>{product.description}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.productPrice}>
              Rs: {product.productPrice}.00
            </Text>
            <Text style={styles.taxRate}>
              Tax Rate 2% ~ Rs: {product.productPrice / 20} (Rs:{" "}
              {product.productPrice + product.productPrice / 20})
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.addToCartButtonContainer}>
        <TouchableOpacity
          onPress={() =>
            product.isAvailable ? addToCart(product.id, seller) : null
          }
          style={
            product.isAvailable
              ? styles.addToCartButton
              : styles.notAvailableButton
          }
        >
          <Text style={styles.addToCartButtonText}>
            {product.isAvailable ? "Add to cart" : "Not Available"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default ProductInfo;
