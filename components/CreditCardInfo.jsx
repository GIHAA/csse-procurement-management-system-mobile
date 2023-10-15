import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLOURS } from "../constants";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CreditCardInfo = () => {
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
          <Text
            style={{
              fontSize: 10,
              fontWeight: "900",
              color: COLOURS.blue,
              letterSpacing: 1,
            }}
          >
            VISA
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              color: COLOURS.black,
              fontWeight: "500",
            }}
          >
            Visa Classic
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
            ****-9092
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

export default CreditCardInfo;
