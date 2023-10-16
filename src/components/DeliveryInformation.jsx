import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLOURS } from "../constants";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const DeliveryInformation = () => {
  return (
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
          width: "80%",
          alignItems: "center",
        }}
      >
        <View
          style={{
            color: COLOURS.blue,
            backgroundColor: COLOURS.backgroundLight,
            alignItems: "center",
            justifyContent: "center",
            padding: 12,
            borderRadius: 10,
            marginRight: 18,
          }}
        >
          <MaterialCommunityIcons
            name="truck-delivery-outline"
            style={{
              fontSize: 18,
              color: COLOURS.blue,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              color: COLOURS.black,
              fontWeight: "500",
            }}
          >
            2 Petre Melikishvili St.
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: COLOURS.black,
              fontWeight: "400",
              lineHeight: 20,
              opacity: 0.5,
            }}
          >
            0162, Tbilisi
          </Text>
        </View>
      </View>
      <MaterialCommunityIcons
        name="chevron-right"
        style={{ fontSize: 22, color: COLOURS.black }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default DeliveryInformation;
