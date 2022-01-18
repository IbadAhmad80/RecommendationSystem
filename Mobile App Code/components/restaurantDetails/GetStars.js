import React, { useState } from "react";

import { StyleSheet, Text, View } from "react-native";

import StarRating from "react-native-star-rating";
export default function GetStars({ setUserRating, userRating }) {
  onGeneralStarRatingPress = (rating) => {
    setGeneralStarCount(rating);
    setUserRating(rating);
  };

  return (
    <View style={styles.container}>
      <StarRating
        disabled={false}
        maxStars={5}
        rating={userRating}
        fullStarColor="red"
        halfStarColor="green"
        starSize={40}
        selectedStar={(rating) => {
          setUserRating(rating);
        }}
      />
    </View>
  import React, { useState } from "react";

import { StyleSheet, Text, View } from "react-native";

import StarRating from "react-native-star-rating";
export default function GetStars({ setUserRating, userRating }) {
  onGeneralStarRatingPress = (rating) => {
    setGeneralStarCount(rating);
    setUserRating(rating);
  };

  return (
    <View style={styles.container}>
      <StarRating
        disabled={false}
        maxStars={5}
        rating={userRating}
        fullStarColor="red"
        halfStarColor="green"
        starSize={40}
        selectedStar={(rating) => {
          setUserRating(rating);
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
