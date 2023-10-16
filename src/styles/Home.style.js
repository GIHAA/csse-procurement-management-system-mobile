import { StyleSheet } from "react-native";
import { COLOURS } from "../constants";


const styles = StyleSheet.create({
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
  headerIcon: {
    opacity: 0,
    fontSize: 18,
    color: COLOURS.backgroundMedium,
    padding: 12,
    borderRadius: 10,
    backgroundColor: COLOURS.backgroundLight,
  },
  headerIcon2: {
    opacity: 1,
    fontSize: 18,
    color: COLOURS.backgroundDark,
    padding: 12,
    borderRadius: 10,
    backgroundColor: COLOURS.backgroundLight,
  },
  greeting: {
    marginBottom: 10,
    padding: 16,
  },
  greetingText: {
    fontSize: 26,
    color: COLOURS.black,
    fontWeight: "500",
    letterSpacing: 1,
    marginBottom: 10,
  },
  shopInfo: {
    fontSize: 14,
    color: COLOURS.black,
    fontWeight: "400",
    letterSpacing: 1,
    lineHeight: 24,
  },
  recentActivity: {
    padding: 16,
  },
  recentActivityTitle: {
    fontSize: 18,
    color: COLOURS.black,
    fontWeight: "500",
    letterSpacing: 1,
  },
  recentActivityContent: {
    flex: 1,
  },
  recentActivity: {
    marginVertical: 16,
  },
  recentActivityTitle: {
    fontSize: 20,
    marginLeft: 12,
    fontWeight: "bold",
  },
  recentActivityContent: {
    marginVertical: 8,
  },
  activityCard: {
    backgroundColor: COLOURS.secondary,
    marginVertical: 10,
    marginHorizontal: 13,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOURS.primary,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  activityText: {
    fontSize: 15,
  },
});

export default styles;