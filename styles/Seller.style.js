import { StyleSheet } from "react-native";
import { COLOURS ,SIZES } from "../constants";

const styles =  StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: COLOURS.white,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  backButton: {
    fontSize: 18,
    color: COLOURS.backgroundDark,
    padding: 12,
    backgroundColor: COLOURS.backgroundLight,
    borderRadius: 12,
  },
  cartButton: {
    fontSize: 18,
    color: COLOURS.backgroundMedium,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOURS.backgroundLight,
  },
  titleContainer: {
    marginBottom: 10,
    padding: 16,
  },
  title: {
    fontSize: 26,
    color: COLOURS.black,
    fontWeight: "500",
    letterSpacing: 1,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: COLOURS.black,
    fontWeight: "400",
    letterSpacing: 1,
    lineHeight: 24,
  },
  productsContainer: {
    padding: 16,
  },
  productsHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productsTitle: {
    fontSize: 18,
    color: COLOURS.black,
    fontWeight: "500",
    letterSpacing: 1,
  },
  productsCount: {
    fontSize: 14,
    color: COLOURS.black,
    fontWeight: "400",
    opacity: 0.5,
    marginLeft: 10,
  },
  seeAll: {
    fontSize: 14,
    color: COLOURS.blue,
    fontWeight: "400",
  },
});


export default styles;
