import React from "react";
import { Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
        alignItems: "center",
      }}
    >
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color="#6e6969"
          style={{ marginRight: 10 }}
        />
      )}
      <TextInput style={{ fontSize: 18, color: "#0c0c0c" }} {...otherProps} />
    </View>
  );
}

export default AppTextInput;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         import React from "react";
import { Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
        alignItems: "center",
      }}
    >
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color="#6e6969"
          style={{ marginRight: 10 }}
        />
      )}
      <TextInput style={{ fontSize: 18, color: "#0c0c0c" }} {...otherProps} />
    </View>
  );
}

export default AppTextInput;
