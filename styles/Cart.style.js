import { StyleSheet } from "react-native";
import { COLOURS } from "../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: COLOURS.white,
    position: "relative",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    paddingTop: 16,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerBackButton: {
    fontSize: 18,
    color: COLOURS.backgroundDark,
    padding: 12,
    backgroundColor: COLOURS.backgroundLight,
    borderRadius: 12,
  },
  headerTitle: {
    fontSize: 14,
    color: COLOURS.black,
    fontWeight: "400",
  },
  cartTitle: {
    fontSize: 20,
    color: COLOURS.black,
    fontWeight: "500",
    letterSpacing: 1,
    paddingTop: 20,
    paddingLeft: 16,
    marginBottom: 10,
  },
  productContainer: {
    paddingHorizontal: 16,
  },
  deliveryLocationTitle: {
    fontSize: 16,
    color: COLOURS.black,
    fontWeight: "500",
    letterSpacing: 1,
    marginBottom: 20,
  },
  paymentMethodTitle: {
    fontSize: 16,
    color: COLOURS.black,
    fontWeight: "500",
    letterSpacing: 1,
    marginBottom: 20,
    marginTop: 18,
  },
  orderInfoTitle: {
    fontSize: 16,
    color: COLOURS.black,
    fontWeight: "500",
    letterSpacing: 1,
    marginBottom: 20,
    marginTop: 20,
  },
  totalRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  totalLabel: {
    fontSize: 12,
    fontWeight: "400",
    maxWidth: "80%",
    color: COLOURS.black,
    opacity: 0.5,
  },
  totalValue: {
    fontSize: 12,
    fontWeight: "400",
    color: COLOURS.black,
    opacity: 0.8,
  },
  checkoutButtonContainer: {
    position: "absolute",
    bottom: 10,
    height: "8%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  checkoutButton: {
    width: "86%",
    height: "90%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  checkoutButtonText: {
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 1,
    color: COLOURS.white,
    textTransform: "uppercase",
  },
});

export default styles;
