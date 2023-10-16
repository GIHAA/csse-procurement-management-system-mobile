import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Items } from "../assets/database/Database";
import { COLOURS, SIZES } from "../constants";
import { Feather } from "@expo/vector-icons";
import styles from "../styles/Seller.style";

const Sellers = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromDB();
    });
  }, [navigation]);

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
          <View style={{ flexDirection: "row", alignItems: "center" }}></View>
          <ScrollView style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Store", { name: "Gihan" });
                }}
                style={styles.sellerCard}
              >
                <View style={styles.sellerInfo}>
                  <View style={styles.sellerText}>
                    <Text style={styles.sellerName}>Namal Solutions</Text>
                    <Text style={styles.sellerCategory}>
                      Category: Tools and Equipment
                    </Text>
                    <Text style={styles.sellerAddress}>
                      Address: 668/5 narangodapaluwa battuwatta
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sellerCard}>
                <View style={styles.sellerInfo}>
                  <View style={styles.sellerText}>
                    <Text style={styles.sellerName}>Namal Solutions</Text>
                    <Text style={styles.sellerCategory}>
                      Category: Tools and Equipment
                    </Text>
                    <Text style={styles.sellerAddress}>
                      Address: 668/5 narangodapaluwa battuwatta
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Sellers;