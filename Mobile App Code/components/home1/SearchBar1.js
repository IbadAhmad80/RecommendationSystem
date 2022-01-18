import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import AntDesign from "react-native-vector-icons/AntDesign";
export default function SearchBar1(props) {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#f8f4f4",
          borderRadius: 25,
          borderWidth: 0.3,
          borderColor: "gray",
          width: "100%",
          padding: 15,
          marginVertical: 10,
          alignItems: "center",

          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="location-sharp"
            size={20}
            color="#6e6969"
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Search l"
            style={{
              fontSize: 16,
              fontFamily: "Montserrat_600SemiBold",
              fontWeight: "600",
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            marginRight: 5,
            alignItems: "center",
            backgroundColor: "red",
            paddingHorizontal: 9,
            paddingVertical: 5,
            borderRadius: 30,
          }}
        >
          <AntDesign
            name="clockcircle"
            size={12}
            style={{ marginRight: 5 import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import AntDesign from "react-native-vector-icons/AntDesign";
export default function SearchBar1(props) {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#f8f4f4",
          borderRadius: 25,
          borderWidth: 0.3,
          borderColor: "gray",
          width: "100%",
          padding: 15,
          marginVertical: 10,
          alignItems: "center",

          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="location-sharp"
            size={20}
            color="#6e6969"
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Search l"
            style={{
              fontSize: 16,
              fontFamily: "Montserrat_600SemiBold",
              fontWeight: "600",
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            marginRight: 5,
            alignItems: "center",
            backgroundColor: "red",
            paddingHorizontal: 9,
            paddingVertical: 5,
            borderRadius: 30,
          }}
        >
          <AntDesign
            name="clockcircle"
            size={12}
            style={{ marginRight: 5 }}
            color="#fff"
          />
          <Text
            style={{
              color: "#fff",
              fontFamily: "Montserrat_600SemiBold",
              fontWeight: "600",
            }}
          >
            Search
          </Text>
        </View>
      </View>
    );
  }
}
