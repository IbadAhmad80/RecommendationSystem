import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import AntDesign from "react-native-vector-icons/AntDesign";
export default function SearchBar(props) {
  let [text, settext] = useState("");
  let fetchCities = (text) => {
    settext(text);
  };

  const handlePress = () => {
    props.cityHandler(text);
  };
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#f8f4f4",
        borderRadius: 25,
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
          placeholder="Search"
          style={{ fontSize: 18 }}
          value={text}
          onChangeText={(text) => fetchCities(text)}
        />
      </View>
      <TouchableOpacity onPress={handlePress}>
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
          <Text style={{ color: "#fff" }}>Search</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
                                                                       import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import AntDesign from "react-native-vector-icons/AntDesign";
export default function SearchBar(props) {
  let [text, settext] = useState("");
  let fetchCities = (text) => {
    settext(text);
  };

  const handlePress = () => {
    props.cityHandler(text);
  };
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#f8f4f4",
        borderRadius: 25,
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
          placeholder="Search"
          style={{ fontSize: 18 }}
          value={text}
          onChangeText={(text) => fetchCities(text)}
        />
      </View>
      <TouchableOpacity onPress={handlePress}>
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
          <Text style={{ color: "#fff" }}>Search</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
