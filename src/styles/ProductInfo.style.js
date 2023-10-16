import { StyleSheet } from "react-native";
import { COLOURS } from "../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: COLOURS.white,
    position: "relative",
  },
  headerContainer: {
    width: "100%",
    backgroundColor: COLOURS.backgroundLight,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    position: "relative",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  backButton: {
    fontSize: 18,
    color: COLOURS.backgroundDark,
    padding: 12,
    backgroundColor: COLOURS.white,
    borderRadius: 10,
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  paginationContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    marginTop: 32,
  },
  paginationBar: {
    width: "16%",
    height: 2.4,
    backgroundColor: COLOURS.black,
    marginHorizontal: 4,
    borderRadius: 100,
  },
  productInfoContainer: {
    paddingHorizontal: 16,
    marginTop: 6,
  },
  productInfoHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 14,
  },
  cartIcon: {
    fontSize: 18,
    color: COLOURS.blue,
    marginRight: 6,
  },
  shoppingText: {
    fontSize: 12,
    color: COLOURS.black,
  },
  productInfoTitleContainer: {
    flexDirection: "row",
    marginVertical: 4,
    alignItems: "center",
    justifyContent: "space-between",
  },
  productInfoTitle: {
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 0.5,
    marginVertical: 4,
    color: COLOURS.black,
    maxWidth: "84%",
  },
  productDescription: {
    fontSize: 12,
    color: COLOURS.black,
    fontWeight: "400",
    letterSpacing: 1,
    opacity: 0.5,
    lineHeight: 20,
    maxWidth: "85%",
    maxHeight: 44,
    marginBottom: 18,
  },
  priceContainer: {
    paddingHorizontal: 16,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "500",
    maxWidth: "85%",
    color: COLOURS.black,
    marginBottom: 4,
  },
  taxRate: {
    color: COLOURS.black,
  },
  addToCartButtonContainer: {
    position: "absolute",
    bottom: 10,
    height: "8%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartButton: {
    width: "86%",
    height: "90%",
    backgroundColor: COLOURS.blue,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  notAvailableButton: {
    width: "86%",
    height: "90%",
    backgroundColor: COLOURS.gray,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartButtonText: {
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 1,
    color: COLOURS.white,
    textTransform: "uppercase",
  },
});

export default styles;
