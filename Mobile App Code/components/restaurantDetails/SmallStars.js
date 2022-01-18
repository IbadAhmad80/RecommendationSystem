import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import StarRating from "react-native-star-rating";

export default class SmallStars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalStarCount: this.props.star_no,
    };
  }

  onGeneralStarRatingPress(rating) {
    this.setState({
      generalStarCount: rating,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={this.state.generalStarCount}
            fullStarColor="red"
            halfStarColor="green"
            starSize={16}
          />
        </View>
      </View>
    );import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import StarRating from "react-native-star-rating";

export default class SmallStars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalStarCount: this.props.star_no,
    };
  }

  onGeneralStarRatingPress(rating) {
    this.setState({
      generalStarCount: rating,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={this.state.generalStarCount}
            fullStarColor="red"
            halfStarColor="green"
            starSize={16}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
