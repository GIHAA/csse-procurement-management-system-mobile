import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLOURS } from "../constants";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CreditCardInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardInfo}>
        <View style={styles.cardType}>
          <Text style={styles.cardTypeText}>VISA</Text>
        </View>
        <View>
          <Text style={styles.cardName}>Visa Classic</Text>
          <Text style={styles.cardNumber}>****-9092</Text>
        </View>
      </View>
      <MaterialCommunityIcons
        name="chevron-right"
        style={styles.chevronIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardInfo: {
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
  },
  cardType: {
    backgroundColor: COLOURS.backgroundLight,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 10,
    marginRight: 18,
  },
  cardTypeText: {
    fontSize: 10,
    fontWeight: "900",
    color: COLOURS.blue,
    letterSpacing: 1,
  },
  cardName: {
    fontSize: 14,
    color: COLOURS.black,
    fontWeight: "500",
  },
  cardNumber: {
    fontSize: 12,
    color: COLOURS.black,
    fontWeight: "400",
    lineHeight: 20,
    opacity: 0.5,
  },
  chevronIcon: {
    fontSize: 22,
    color: COLOURS.black,
  },
});

export default CreditCardInfo;