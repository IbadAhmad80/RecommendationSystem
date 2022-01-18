import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import Ionicons from "react-native-vector-icons/Ionicons";

import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar2({ setCity }) {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{ key: "google ap key" }}
        onPress={(data) => {
          console.log(data);
          setCity(data.description);
        }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 0,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} color={"#6e6969"} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "red",
              padding: 5,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <AntDesign
              name="clockcircle"
              size={12}
              style={{ marginRight: 6 }}
              color={"#fff"}
            />
            <Text style={{ color: "#fff", paddingRight: 5 }}>Search</Text>
          </View>
import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import Ionicons from "react-native-vector-icons/Ionicons";

import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar2({ setCity }) {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{ key: "google ap key" }}
        onPress={(data) => {
          console.log(data);
          setCity(data.description);
        }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 0,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} color={"#6e6969"} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "red",
              padding: 5,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <AntDesign
              name="clockcircle"
              size={12}
              style={{ marginRight: 6 }}
              color={"#fff"}
            />
            <Text style={{ color: "#fff", paddingRight: 5 }}>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
