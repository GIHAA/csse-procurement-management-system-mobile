import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { COLOURS } from "../constants";

const styles = StyleSheet.create({
  container: {
    width: "48%",
    marginVertical: 14,
  },
  cardContainer: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    backgroundColor: COLOURS.backgroundLight,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  offBadge: {
    position: "absolute",
    width: "20%",
    height: "24%",
    backgroundColor: COLOURS.green,
    top: 0,
    left: 0,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  offText: {
    fontSize: 12,
    color: COLOURS.white,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  productImage: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
  productName: {
    fontSize: 12,
    color: COLOURS.black,
    fontWeight: "600",
    marginBottom: 2,
  },
  availabilityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  availabilityIcon: {
    fontSize: 12,
    marginRight: 6,
  },
  availabilityText: {
    fontSize: 12,
  },
});

const ProductCard = ({ data , navigation , seller}) => {

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductInfo", { productID: data.id, seller})
      }
      style={styles.container}
    >
      <View style={styles.cardContainer}>
        {data.isOff ? (
          <View style={styles.offBadge}>
            <Text style={styles.offText}>{data.offPercentage}%</Text>
          </View>
        ) : null}
        <Image
          source={{ uri: data.productImage }}
          style={styles.productImage}
        />
      </View>
      <Text style={styles.productName}>{data.productName}</Text>
      {data.category === "accessory" ? (
        data.isAvailable ? (
          <View style={styles.availabilityContainer}>
            <FontAwesome
              name="circle"
              style={[styles.availabilityIcon, { color: COLOURS.green }]}
            />
            <Text style={[styles.availabilityText, { color: COLOURS.green }]}>
              Available
            </Text>
          </View>
        ) : (
          <View style={styles.availabilityContainer}>
            <FontAwesome
              name="circle"
              style={[styles.availabilityIcon, { color: COLOURS.red }]}
            />
            <Text style={[styles.availabilityText, { color: COLOURS.red }]}>
              Unavailable
            </Text>
          </View>
        )
      ) : null}
      <Text>Rs: {data.productPrice}</Text>
    </TouchableOpacity>
  );
};

export default ProductCard;
