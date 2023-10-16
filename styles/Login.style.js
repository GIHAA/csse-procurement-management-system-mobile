import { StyleSheet } from "react-native";
import { COLOURS , THEME } from "../constants";


const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: THEME.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: THEME.colors.primary,
  },
});

export default styles
