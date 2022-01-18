import React from "react";
import { TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function NewListingButton({ onPress }) {
  returimport React from "react";
import { TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: "red",
          borderColor: "#fff",
          alignItems: "center",

          borderRadius: 40,
          borderWidth: 10,
          bottom: 22,
          height: 80,
          justifyContent: "center",
          width: 80,
        }}
      >
        <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={40} />
      </View>
    </TouchableOpacity>
  );
}
export default NewListingButton;
