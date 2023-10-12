import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { COLOURS, Items } from "../database/Database";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { getAuth } from "firebase/auth";
import { COLORS, SIZES } from "../../constants";
import { Feather } from "@expo/vector-icons";

const Sellers = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);
  const [user, setUser] = useState();

  //get called on screen loads
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromDB();
    });

    const auth = getAuth();
    const user = auth.currentUser;
    setUser(user);

    return unsubscribe;
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

  //create an product reusable card

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLOURS.white,
      }}
    >
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 16,
          }}
        >
          <TouchableOpacity>
            <Entypo
              name="shopping-bag"
              style={{
                fontSize: 18,
                color: COLOURS.backgroundMedium,
                padding: 12,
                borderRadius: 10,
                backgroundColor: COLOURS.backgroundLight,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginBottom: 10,
            padding: 16,
          }}
        >
          <Text
            style={{
              fontSize: 26,
              color: COLOURS.black,
              fontWeight: "500",
              letterSpacing: 1,
              marginBottom: 10,
            }}
          >
            Available Sellers
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            marginHorizontal: SIZES.small,
            backgroundColor: COLORS.secondary,
            borderRadius: SIZES.medium,
            marginVertical: SIZES.medium,
            height: 50,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.secondary,
              marginRight: SIZES.small,
              borderRadius: SIZES.small,
            }}
          >
            <TextInput
              style={{
                fontFamily: "regular",
                width: "100%",
                height: "100%",
                paddingHorizontal: SIZES.small,
              }}
              value=""
              placeholder="Search for sellers"
            />
          </View>

          <View>
            <TouchableOpacity
              style={{
                width: 50,
                height: "100%",
                borderRadius: SIZES.medium,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.primary,
              }}
            >
              <Feather name="search" size={24} color={COLORS.offwhite} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            padding: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderBottomColor: "gray",
                borderWidth: 1,
                width: "100%",
                opacity: 0.3,
              }}
            ></View>
          </View>

          <ScrollView style={{ flex: 1 }}>
            
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity
                onPress={()=>{
                    navigation.navigate("Store" , { name : "Gihan"})
                }}
                style={{
                  height: 110,
                  marginTop: 20,
                  backgroundColor: COLORS.secondary,
                  marginHorizontal: 13,
                  borderRadius: 10,
                  justifyContent: "space-between",
                  padding: 10,
                  borderWidth: 1,
                  borderColor: COLORS.primary,
                  width: "100%",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "column" }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      Namal Solutions
                    </Text>
                    <Text style={{ fontSize: 15 }}>
                      Category : Tools and Equipment
                    </Text>
                    <Text style={{ fontSize: 15 }}>
                      Address : 668/5 narangodapaluwa battuwatta
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  height: 110,
                  marginTop: 20,
                  backgroundColor: COLORS.secondary,
                  marginHorizontal: 13,
                  borderRadius: 10,
                  justifyContent: "space-between",
                  padding: 10,
                  borderWidth: 1,
                  borderColor: COLORS.primary,
                  width: "100%",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "column" }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      Namal Solutions
                    </Text>
                    <Text style={{ fontSize: 15 }}>
                      Category : Tools and Equipment
                    </Text>
                    <Text style={{ fontSize: 15 }}>
                      Address : 668/5 narangodapaluwa battuwatta
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
