import React from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "./src/navigation/BottomTabNavigation";
import Home from "./src/screens/Home";
import MyCart from './src/screens/MyCart';
import ProductInfo from './src/screens/ProductInfo';
import Store from "./src/screens/Store";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./src/assets/fonts/Poppins-Regular.ttf"),
    light: require("./src/assets/fonts/Poppins-Light.ttf"),
    bold: require("./src/assets/fonts/Poppins-Bold.ttf"),
    medium: require("./src/assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("./src/assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./src/assets/fonts/Poppins-SemiBold.ttf"),
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
      {/* <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }}/>
   */}
      {/* <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
   */}
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