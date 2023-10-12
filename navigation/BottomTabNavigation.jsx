import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import { COLORS } from "../constants/index";
import { Entypo } from '@expo/vector-icons';
import Home from "../components/screens/Home"
import Store from "../components/screens/Store";
import Sellers from "../components/screens/Sellers";


const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
  },
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={React.memo(Home)}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Sellers"
        component={React.memo(Sellers)}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={"search-sharp"}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />


      <Tab.Screen
        name="fav"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (

              <Feather
                name={"heart"}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="profile"
        component={React.memo(Home)}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
