import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

export const localRestaurants = [];

export default function RestaurantItems({
  image,
  name,
  rating,
  type,
  city,
  country,
  address,
  onPress,
}) {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBolimport React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

export const localRestaurants = [];

export default function RestaurantItems({
  image,
  name,
  rating,
  type,
  city,
  country,
  address,
  onPress,
}) {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            marginTop: 35,
            backgroundColor: "white",
            borderRadius: 15,
          }}
        >
          <Image
            source={{
              uri: image,
            }}
            style={{
              width: "100%",
              height: 180,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
            paddingHorizontal: 10,
            backgroundColor: "white",

            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
        >
          <View>
            <Text
              style={{
                maxWidth: 280,
                fontSize: 15,
                fontWeight: "600",
                fontFamily: "Montserrat_600SemiBold",
              }}
            >
              {name}
            </Text>

            <Text
              style={{
                fontSize: 13,
                color: "grey",
                marginTop: 5,
                fontWeight: "600",
                fontFamily: "Montserrat_600SemiBold",
              }}
            >
              Category / {type?.toUpperCase()}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#eee",
              height: 30,
              width: 30,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                fontWeight: "600",
                fontFamily: "Montserrat_600SemiBold",
              }}
            >
              {rating}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
