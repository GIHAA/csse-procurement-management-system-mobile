import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLOURS } from "../constants";
import styles from "../styles/Home.style";
import { RecentActivities } from "../assets/data/data";

const Home = ({ navigation }) => {
  const [token, setToken] = useState("");
  const [recentActivities, setRecentActivities] = useState([]);

  // Fetch token on screen load
  useEffect(() => {
    async function fetchData() {
      const userToken = await AsyncStorage.getItem('userToken');
      setToken(userToken);
    }
    const unsubscribe = navigation.addListener("focus", fetchData);
    setRecentActivities(RecentActivities);
    fetchData();
    return () => {
      unsubscribe();
    };
  }, [navigation]);


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
          <Text style={styles.greetingText}>Good morning </Text>
          <Text style={styles.shopInfo}></Text>
        </View>
        <View style={styles.recentActivity}>
          <Text style={styles.recentActivityTitle}>Recent activity</Text>
         
          <ScrollView style={styles.recentActivityContent}>
            {recentActivities.map((activity) => (
              <View key={activity.id} style={styles.activityCard}>
                <Text style={styles.activityTitle}>{activity.title}</Text>
                <Text style={styles.activityText}>
                  Field Officer: {activity.fieldOfficer}
                </Text>
                <Text style={styles.activityText}>Seller: {activity.seller}</Text>
                <Text style={styles.activityText}>
                  Total Price: {activity.totalPrice}
                </Text>
              </View>
            ))}
         
          </ScrollView>

        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
