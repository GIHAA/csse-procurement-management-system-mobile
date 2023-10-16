import { StyleSheet } from "react-native";
import { COLOURS } from "../constants";

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

export default styles;
