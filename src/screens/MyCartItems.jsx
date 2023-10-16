import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLOURS } from "../assets/database/Database";
import styles from "../styles/CartItem.style";

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
            <Text>{quantity}</Text>
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