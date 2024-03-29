import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import ImageOverlay from "react-native-image-overlay";

import AppLoading from "expo-app-loading";

import {
  useFonts,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

function WelcomeScreen({ navigation }) {
  const looginBefore = async () => {
    try {
      let uid1 = await AsyncStorage.getItem("uid");

      let email1 = await AsyncStorage.getItem("email");

      if (email1 != null && uid1 != null) {
        navigation.navigate("Appnav");
      }
    } catch (error) {
      alert(err);
    }
  };

  useEffect(() => {
    looginBefore();
  }, []);

  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ImageOverlay
        source={{
          uri: "https://images.pexels.com/photos/3252051/pexels-photo-3252051.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        }}
        overlayColor="black"
        overlayAlpha={0.4}
        height="100%"
      >
        <View style={styles.background}>
          <View style={styles.logoContainer}>
            <Text
              style={{
                color: "#fff",

                fontSize: 35,
                fontWeight: "900",
                paddingHorizontal: 15,

                textAlign: "center",
                marginTop: 40,
                fontFamily: "Montserrat_900Black",
              }}
            >
              Find your perfect places here
            </Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              //[styles.button, { backgroundColor: "red" }]
              style={styles.button}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={styles.text}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageOverlay>
    );
  }
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 350,
    height: 250,
  },
  logoContainer: {
    position: "absolute",
    top: 60,
  },
  tagline: {
    fontSize: 35,
    fontWeight: "600",
    paddingVertical: 20,
    color: "white",
    fontWeight: "bold",
  },
  button: {
    borderWidth: 4,
    borderColor: "#fff",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: 320,
    marginVertical: 10,
    // borderWidth: 1,
    // borderColor: "white",
    fontWeight: "bold",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "600",
    fontFamily: "Montserrat_600SemiBold",
  },
});

export default WelcomeScreen;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import ImageOverlay from "react-native-image-overlay";

import AppLoading from "expo-app-loading";

import {
  useFonts,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

function WelcomeScreen({ navigation }) {
  const looginBefore = async () => {
    try {
      let uid1 = await AsyncStorage.getItem("uid");

      let email1 = await AsyncStorage.getItem("email");

      if (email1 != null && uid1 != null) {
        navigation.navigate("Appnav");
      }
    } catch (error) {
      alert(err);
    }
  };

  useEffect(() => {
    looginBefore();
  }, []);

  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ImageOverlay
        source={{
          uri: "https://images.pexels.com/photos/3252051/pexels-photo-3252051.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        }}
        overlayColor="black"
        overlayAlpha={0.4}
        height="100%"
      >
        <View style={styles.background}>
          <View style={styles.logoContainer}>
            <Text
              style={{
                color: "#fff",

                fontSize: 35,
                fontWeight: "900",
                paddingHorizontal: 15,

                textAlign: "center",
                marginTop: 40,
                fontFamily: "Montserrat_900Black",
              }}
            >
              Find your perfect places here
            </Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              //[styles.button, { backgroundColor: "red" }]
              style={styles.button}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={styles.text}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageOverlay>
    );
  }
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 350,
    height: 250,
  },
  logoContainer: {
    position: "absolute",
    top: 60,
  },
  tagline: {
    fontSize: 35,
    fontWeight: "600",
    paddingVertical: 20,
    color: "white",
    fontWeight: "bold",
  },
  button: {
    borderWidth: 4,
    borderColor: "#fff",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: 320,
    marginVertical: 10,
    // borderWidth: 1,
    // borderColor: "white",
    fontWeight: "bold",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "600",
    fontFamily: "Montserrat_600SemiBold",
  },
});

export default WelcomeScreen;
