import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

import SmallStars from "./SmallStars";
export default function UserReviews({ Reviews }) {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={{
          marginBottom: 10,
          marginHorizontal: 15,
        }}
      >
        <FlatList
          data={Reviews}
          keyExtractor={(data) => {
            data.id.toString();
          }}
          renderItem={(import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

import SmallStars from "./SmallStars";
export default function UserReviews({ Reviews }) {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={{
          marginBottom: 10,
          marginHorizontal: 15,
        }}
      >
        <FlatList
          data={Reviews}
          keyExtractor={(data) => {
            data.id.toString();
          }}
          renderItem={({ item }) => (
            <RestaurantImage
              image={item.user.image_url}
              name={item.user.name}
              comment={item.text}
              rating={item.rating}
              id={item.id}
            />
          )}
        />
      </TouchableOpacity>
    );
  }
}
const RestaurantImage = (props) => (
  <View
    style={{
      marginTop: 15,
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    }}
  >
    {(props.image && (
      <Image
        source={{ uri: props.image }}
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          paddingTop: 15,
          paddingBottom: 15,
        }}
      />
    )) || (
      <View
        style={{
          backgroundColor: "red",
          borderRadius: 50,
          height: 50,
          width: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "600",
            paddingHorizontal: 10,
            alignContent: "center",
            alignItems: "center",
            fontFamily: "Montserrat_600SemiBold",
            color: "#fff",
          }}
        >
          {props.name?.charAt(0).toUpperCase()}
        </Text>
      </View>
    )}
    {/**content */}
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        padding: 15,
        paddingTop: 5,
        paddingLeft: 0,
        marginLeft: 10,
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 5,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            fontFamily: "Montserrat_600SemiBold",
          }}
        >
          {props.name || "Anonymus"}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "#666",
            fontWeight: "600",
            fontFamily: "Montserrat_600SemiBold",
          }}
        >
          {props.time}
        </Text>
      </View>
      <View style={{ width: 50, height: 20 }}>
        <SmallStars star_no={props.rating} />
      </View>
      <Text
        style={{
          fontSize: 14,
          color: "#333333",
          marginVertical: 5,
          fontWeight: "600",
          fontFamily: "Montserrat_600SemiBold",
        }}
      >
        {props.comment}
      </Text>
    </View>
  </View>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 10,
      marginHorizontal: 10,
    }}
  >
    <View>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "600",
          fontFamily: "Montserrat_600SemiBold",
        }}
      >
        {props.name}
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
        35-45 . min
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
      <Text style={{ fontWeight: "600", fontFamily: "Montserrat_600SemiBold" }}>
        {props.rating}
      </Text>
    </View>
  </View>
);
