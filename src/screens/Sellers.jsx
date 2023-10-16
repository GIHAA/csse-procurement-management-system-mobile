import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { COLOURS, SIZES } from "../constants";
import { Feather } from "@expo/vector-icons";
import styles from "../styles/Seller.style";
import { SellersDetails } from "../assets/data/data";

const Sellers = ({ navigation }) => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    setSellers(SellersDetails);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}></View>
        <View style={{ marginBottom: 10, padding: 16 }}>
          <Text style={styles.title}>Available Sellers</Text>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchInput}>
            <TextInput
              style={styles.searchInput}
              value=""
              placeholder="Search for sellers"
            />
          </View>
          <View style={styles.searchButton}>
            <TouchableOpacity>
              <Feather name="search" size={24} color={COLOURS.offwhite} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ padding: 16 }}>
          <ScrollView style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              {sellers.map((seller) => (
                <TouchableOpacity
                  key={seller.id}
                  onPress={() => {
                    navigation.navigate("Store", { seller });
                  }}
                  style={styles.sellerCard}
                >
                  <View style={styles.sellerInfo}>
                    <View style={styles.sellerText}>
                      <Text style={styles.sellerName}>{seller.name}</Text>
                      <Text style={styles.sellerCategory}>
                        Category: {seller.category}
                      </Text>
                      <Text style={styles.sellerAddress}>
                        Address: {seller.address}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Sellers;
