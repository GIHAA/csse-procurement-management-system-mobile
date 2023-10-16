import { StyleSheet } from "react-native";
import { COLOURS , SIZES } from "../constants";


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: COLOURS.white,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  title: {
    fontSize: 26,
    color: COLOURS.black,
    fontWeight: "500",
    letterSpacing: 1,
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: SIZES.small,
    backgroundColor: COLOURS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
  },
  searchInput: {
    flex: 1,
    backgroundColor: COLOURS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchButton: {
    width: 50,
    height: "100%",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOURS.primary,
  },
  sellerCard: {
    height: 110,
    marginTop: 20,
    backgroundColor: COLOURS.secondary,
    marginHorizontal: 13,
    borderRadius: 10,
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderColor: COLOURS.primary,
    width: "100%",
  },
  sellerInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sellerText: {
    flexDirection: "column",
  },
  sellerName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sellerCategory: {
    fontSize: 15,
  },
  sellerAddress: {
    fontSize: 15,
  },
});


export default styles;
