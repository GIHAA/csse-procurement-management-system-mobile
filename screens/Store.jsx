import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Items } from "../assets/database/Database";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLOURS } from "../constants";
import { useNavigation } from "@react-navigation/native";
import ProductCard from "../components/ProductCard";
import styles from "../styles/Store.style";

const Store = ({ route }) => {
  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);
  const [user, setUser] = useState();

  const { name } = route.params;

  const navigation = useNavigation();

  // get called on screen loads
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromDB();
    });
    return unsubscribe;
  }, [navigation]);

  // get data from DB
  const getDataFromDB = () => {
    let productList = [];
    let accessoryList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category === "product") {
        productList.push(Items[index]);
      } else if (Items[index].category === "accessory") {
        accessoryList.push(Items[index]);
      }
    }

    setProducts(productList);
    setAccessory(accessoryList);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="chevron-left" style={styles.backButton} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("MyCart")}>
            <MaterialCommunityIcons name="cart" style={styles.cartButton} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{name} Hardware Solutions</Text>
          <Text style={styles.description}>
            Hardware shop on battuwatta
            {"\n"}24/7 services
          </Text>
        </View>
        <View style={styles.productsContainer}>
          <View style={styles.productsHeader}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.productsTitle}>Products</Text>
              <Text style={styles.productsCount}>{products.length}</Text>
            </View>
            <Text style={styles.seeAll}>See All</Text>
          </View>
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}>
            {products.map((data) => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Store;
