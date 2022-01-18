import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import { Formik } from "formik";
import * as Yup from "yup";
import AppTextInput from "../components/login&signup/AppTextInput";
import { signInWithEmailAndPassword } from "../firebase";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function Login({ navigation }) {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          paddingHorizontal: 15,
        }}
      >
        <Image
          source={require("../assets/images/logo3.png")}
          style={{
            width: 150,
            height: 250,
            alignSelf: "center",
            marginBottom: 20,
          }}
        />
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (value) => {
            // if (signInWithEmailAndPassword(value.email, value.password)) {
            //   navigation.navigate("Appnav");
            // }
            const log = await signInWithEmailAndPassword(
              value.email,
              value.password,
           import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import { Formik } from "formik";
import * as Yup from "yup";
import AppTextInput from "../components/login&signup/AppTextInput";
import { signInWithEmailAndPassword } from "../firebase";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function Login({ navigation }) {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          paddingHorizontal: 15,
        }}
      >
        <Image
          source={require("../assets/images/logo3.png")}
          style={{
            width: 150,
            height: 250,
            alignSelf: "center",
            marginBottom: 20,
          }}
        />
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (value) => {
            // if (signInWithEmailAndPassword(value.email, value.password)) {
            //   navigation.navigate("Appnav");
            // }
            const log = await signInWithEmailAndPassword(
              value.email,
              value.password,
              navigation
            );
          }}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
                textContentType="emailAddress"
                placeholder="Email"
                icon="email"
              />
              {touched.email && (
                <Text style={{ color: "red" }}>{errors.email}</Text>
              )}
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
                placeholder="Password"
                icon="lock"
              />
              {touched.password && (
                <Text style={{ color: "red" }}>{errors.password}</Text>
              )}

              <TouchableOpacity
                onPress={handleSubmit}
                style={{
                  backgroundColor: "red",
                  borderRadius: 25,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 15,
                  width: "100%",
                  marginVertical: 10,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 18,
                    textTransform: "uppercase",
                    fontWeight: "600",

                    fontFamily: "Montserrat_600SemiBold",
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={{ marginTop: 8, flexDirection: "row-reverse", marginLeft: 10 }}
        >
          <Text
            style={{
              color: "#6e6969",
              fontWeight: "600",

              fontFamily: "Montserrat_600SemiBold",
            }}
          >
            Register the account ?
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
