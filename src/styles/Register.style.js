import { StyleSheet } from "react-native";
import { THEME } from "../constants";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: THEME.colors.primary,
  },
});

export default styles;
