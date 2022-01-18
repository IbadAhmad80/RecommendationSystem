import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import AppNavigator from "./AppNavigator";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";

const Stack = createStackNavigator();

export default function AuthNavigator() {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,

    Montserrat_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
            headerStyle: {
              backgroundColor: "#ee",
            },
            headerTitleAlign: "center",
            headerTintColor: "#000",
            headerTitleStyle: {
              fontWeight: "600",
              fontFamily: "Montserrat_600SemiBold",
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={SignUp}
          options={{
            title: "Register",
            headerStyle: {
              backgroundColor: "#eee",
            },
            headerTitleAlign: "center",
            headerTintColor: "#000",
            headerTitleStyle: {
              fontWeight: "600",
              fontFamily: "Montserrat_600SemiBold",
            },
          }}
        />
        <Stack.Screen
          name="Appnavimport React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import AppNavigator from "./AppNavigator";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";

const Stack = createStackNavigator();

export default function AuthNavigator() {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,

    Montserrat_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
            headerStyle: {
              backgroundColor: "#ee",
            },
            headerTitleAlign: "center",
            headerTintColor: "#000",
            headerTitleStyle: {
              fontWeight: "600",
              fontFamily: "Montserrat_600SemiBold",
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={SignUp}
          options={{
            title: "Register",
            headerStyle: {
              backgroundColor: "#eee",
            },
            headerTitleAlign: "center",
            headerTintColor: "#000",
            headerTitleStyle: {
              fontWeight: "600",
              fontFamily: "Montserrat_600SemiBold",
            },
          }}
        />
        <Stack.Screen
          name="Appnav"
          component={AppNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
}
