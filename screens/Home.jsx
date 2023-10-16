import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Items } from "../assets/database/Database";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLOURS } from "../constants";
import styles from "../styles/Home.style"

const Home = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);
  const [user, setUser] = useState();
  const [token , setToken] = useState("");

  //get called on screen loads
  useEffect(() => {
    async function fetchData() {
      const userToken = await AsyncStorage.getItem('userToken');
      setToken(userToken);
    }
  
    const unsubscribe = navigation.addListener("focus", fetchData);
    fetchData();
  
    return () => {
      unsubscribe();
    };
  }, [navigation]);
  

  //get data from DB
  const getDataFromDB = () => {
    let productList = [];
    let accessoryList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == "product") {
        productList.push(Items[index]);
      } else if (Items[index].category == "accessory") {
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
          <TouchableOpacity>
            <Entypo name="shopping-bag" style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("MyCart")}>
            <MaterialCommunityIcons name="cart" style={styles.headerIcon2} />
          </TouchableOpacity>
        </View>
        <View style={styles.greeting}>
          <Text style={styles.greetingText}>Good morning user</Text>
          <Text style={styles.shopInfo}>Hardware shop on {token}</Text>
        </View>
        <View style={styles.recentActivity}>
          <Text style={styles.recentActivityTitle}>Recent activity</Text>
          <ScrollView style={styles.recentActivityContent}>
            {/* Your recent activity content */}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;