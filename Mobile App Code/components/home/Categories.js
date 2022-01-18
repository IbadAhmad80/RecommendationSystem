import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Touchableimport React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

import { Ionicons } from "@expo/vector-icons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import Geocoder from "react-native-geocoding";
import { useState } from "react";
Geocoder.init("AIzaSyD2d-znOMcFJpf5dPNcYhjeRA27CtJbCQ4");

export default function Categaries({ setCatagaried }) {
  const [active, setActive] = useState(1);
  const items = [
    {
      image: require("../../assets/images/shopping-bag.png"),
      text: "Restaurants",
    },
    {
      image: require("../../assets/images/soft-drink.png"),
      text: "Hotels",
    },

    {
      image: require("../../assets/images/bread.png"),
      text: "Hospitals",
    },
    {
      image: require("../../assets/images/fast-food.png"),
      text: "Barbers",
    },
  ];

  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View
        style={{
          backgroundColor: "#fff",
          marginTop: 10,
          paddingVertical: 10,
          paddingLeft: 18,
          marginHorizontal: 8,
          borderRadius: 15,
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => {
              setCatagaried("restaurants");
              setActive(1);
            }}
          >
            <View style={{ alignItems: "center", marginRight: 30 }}>
              <Ionicons
                name="restaurant"
                size={35}
                color={active === 1 ? "#6e6969" : "red"}
                active
              />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "600",
                  fontFamily: "Montserrat_600SemiBold",

                  color: "#6e6969",
                }}
              >
                Restaurants
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCatagaried("hotels");
              setActive(2);
            }}
          >
            <View style={{ alignItems: "center", marginRight: 37 }}>
              <FontAwesome5
                name="shopping-cart"
                size={35}
                color={active === 2 ? "#6e6969" : "red"}
              />

              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "600",
                  fontFamily: "Montserrat_600SemiBold",

                  color: "#6e6969",
                }}
              >
                Hotels
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCatagaried("hospitals");
              setActive(3);
            }}
          >
            <View style={{ alignItems: "center", marginRight: 34 }}>
              <FontAwesome5
                name="hospital-alt"
                size={35}
                color={active === 3 ? "#6e6969" : "red"}
              />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "600",
                  fontFamily: "Montserrat_600SemiBold",

                  color: "#6e6969",
                }}
              >
                Hospitals
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setCatagaried("barbers");
              setActive(4);
            }}
          >
            <View style={{ alignItems: "center", marginRight: 30 }}>
              <Ionicons
                name="cut"
                size={35}
                color={active === 4 ? "#6e6969" : "red"}
              />

              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "600",
                  fontFamily: "Montserrat_600SemiBold",

                  color: "#6e6969",
                }}
              >
                Barber
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
