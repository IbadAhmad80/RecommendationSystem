import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import StarRating from "react-native-star-rating";

export default function RestaurantDetails({ star_no }) {
  const [stars, setStars] = useState(star_no);

  useEffect(() => {
    setStars(star_no);
  }, [star_no]);

  return (
    <View style={styles.container}>
      <View>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={stars}
          fullStarColor="red"
          halfStarColor="red"
          starSize={28}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
                                                                                                               import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import StarRating from "react-native-star-rating";

export default function RestaurantDetails({ star_no }) {
  const [stars, setStars] = useState(star_no);

  useEffect(() => {
    setStars(star_no);
  }, [star_no]);

  return (
    <View style={styles.container}>
      <View>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={stars}
          fullStarColor="red"
          halfStarColor="red"
          starSize={28}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
