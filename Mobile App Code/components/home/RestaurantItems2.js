import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItems2({ image, name, rating, id, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          marginTop: 15,
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
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
          <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
        </TouchableOpacity>
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
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>{name}</Text>
          <Text style={{ fontSize: 13, color: "yellow", marginTop: 5 }}>
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
          <Text>{rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItems2({ image, name, rating, id, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          marginTop: 15,
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
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
          <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
        </TouchableOpacity>
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
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>{name}</Text>
          <Text style={{ fontSize: 13, color: "yellow", marginTop: 5 }}>
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
          <Text>{rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
