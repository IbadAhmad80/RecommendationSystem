import React from "react";
import { Image, Text, View } from "react-native";
export default function About() {
  return (
    <View>
      <Image
        source={{ uri: image_url }}
        style={{ width: "100%", height: 180 }}
      />
      <Text
        style={{
          fontSize: 29,
          fontWeight: "600",
          marginTop: 5,
          marginHorizontal: 15,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          marginTop: 5,
          marginHorizontal: 15,
          fontWeight: "400",
          fontSize: 15.5,
        }}
      >
        {description}
      </Text>
    </View>
  );
}
                                                                                                    import React from "react";
import { Image, Text, View } from "react-native";
export default function About() {
  return (
    <View>
      <Image
        source={{ uri: image_url }}
        style={{ width: "100%", height: 180 }}
      />
      <Text
        style={{
          fontSize: 29,
          fontWeight: "600",
          marginTop: 5,
          marginHorizontal: 15,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          marginTop: 5,
          marginHorizontal: 15,
          fontWeight: "400",
          fontSize: 15.5,
        }}
      >
        {description}
      </Text>
    </View>
  );
}
