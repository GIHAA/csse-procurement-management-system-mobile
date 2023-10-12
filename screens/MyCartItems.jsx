import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLOURS } from "../assets/database/Database";

const MyCartItems = (props) => {
  const [quantity, setQuantity] = useState(1);


  return (
    <TouchableOpacity key={props.data.id} style={styles.container}>
     <View style={styles.imageContainer}>
        <Image
          source={{ uri: props.data.productImage }}
          style={styles.image}
          onError={(error) => {
            console.error("Image load error:", error);
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.productName}>{props.data.productName}</Text>
          <View style={styles.productInfo}>
            <Text style={styles.productPrice}>
              Rs: {props.data.productPrice}
            </Text> 
            <Text>(~Rs: {props.data.productPrice + props.data.productPrice / 20})</Text>
          </View>
        </View>
        <View style={styles.actionButtons}>
          <View style={styles.quantityButtons}>
            <TouchableOpacity
              onPress={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                  props.updateQuantity(props.data.id , quantity);
                }
              }}
            >
              <MaterialCommunityIcons name="minus" style={styles.quantityIcon} />
            </TouchableOpacity>
            <Text>{quantity-1}</Text>
            <TouchableOpacity
              onPress={() => {
                setQuantity(quantity + 1);
                props.updateQuantity(props.data.id , quantity);
              }}
            >
              <MaterialCommunityIcons name="plus" style={styles.quantityIcon} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => props.removeItemFromCart(props.data.id)}>
            <MaterialCommunityIcons name="delete-outline" style={styles.deleteIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};


export default MyCartItems;


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    marginVertical: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    width: "30%",
    height: 100,
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOURS.backgroundLight,
    borderRadius: 10,
    marginRight: 22,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "space-around",
  },
  productName: {
    fontSize: 14,
    maxWidth: "100%",
    color: COLOURS.black,
    fontWeight: "600",
    letterSpacing: 1,
  },
  productInfo: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
    opacity: 0.6,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "400",
    maxWidth: "85%",
    marginRight: 4,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quantityButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    borderRadius: 100,
    marginRight: 20,
    padding: 4,
    borderWidth: 1,
    borderColor: COLOURS.backgroundMedium,
    opacity: 0.5,
  },
  quantityIcon: {
    fontSize: 16,
    color: COLOURS.backgroundDark,
  },
  deleteIcon: {
    fontSize: 16,
    color: COLOURS.backgroundDark,
    backgroundColor: COLOURS.backgroundLight,
    padding: 8,
    borderRadius: 100,
  },
});