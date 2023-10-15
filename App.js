import React from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import Home from "./screens/Home";
import MyCart from './screens/MyCart';
import ProductInfo from './screens/ProductInfo';
import Store from "./screens/Store";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import StartScreen from "./screens/StartScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }}/>
  
        <Stack.Screen
          name="Bottom Navigation"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
         <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
         <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
         <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
         <Stack.Screen name="Store" component={Store} options={{ headerShown: false }}/>
        <Stack.Screen name="MyCart" component={MyCart} options={{ headerShown: false }}/>
        <Stack.Screen name="ProductInfo" component={ProductInfo} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}