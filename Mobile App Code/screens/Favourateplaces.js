import React, { useState, useEffect } from "react";
import { View, Text, FlatList, SafeAreaView, AsyncStorage } from "react-native";
import axios from "axios";

import AppLoading from "expo-app-loading";
import LoadersAb from "../components/home/LoadersAb";

import {
  useFonts,
  Montserrat_900Black,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";

export default function Favourateplaces({ route, navigation }) {
  console.log("routes and navigations", route);
  const [restaurantData, setRestaurantData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [URL, setURL] = useState("");
  const [email, setemail] = useState("");

  const [uid, setUid] = useState("");

  const loadURL = async () => {
    try {
      let name = await AsyncStorage.getItem("URL");

      let email1 = await AsyncStorage.getItem("email");

      let uidd = await AsyncStorage.getItem("uid");

      if (name !== null && email !== null && uidd !== null) {
        setemail(email1);
        setURL(name);
        setUid(uidd);

        axios
          .get(`${name}/api/getFavPlace?userID=${email1}`)
          .then(({ data, status }) => {
            if (status === 200) {
              setRestaurantData(data);
              setIsLoading(false);
            }
          });
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    loadURL();
  }, [navigation]);

  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,

    Montserrat_900Black,
  });

  if (!fontsimport React, { useState, useEffect } from "react";
import { View, Text, FlatList, SafeAreaView, AsyncStorage } from "react-native";
import axios from "axios";

import AppLoading from "expo-app-loading";
import LoadersAb from "../components/home/LoadersAb";

import {
  useFonts,
  Montserrat_900Black,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";

export default function Favourateplaces({ route, navigation }) {
  console.log("routes and navigations", route);
  const [restaurantData, setRestaurantData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [URL, setURL] = useState("");
  const [email, setemail] = useState("");

  const [uid, setUid] = useState("");

  const loadURL = async () => {
    try {
      let name = await AsyncStorage.getItem("URL");

      let email1 = await AsyncStorage.getItem("email");

      let uidd = await AsyncStorage.getItem("uid");

      if (name !== null && email !== null && uidd !== null) {
        setemail(email1);
        setURL(name);
        setUid(uidd);

        axios
          .get(`${name}/api/getFavPlace?userID=${email1}`)
          .then(({ data, status }) => {
            if (status === 200) {
              setRestaurantData(data);
              setIsLoading(false);
            }
          });
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    loadURL();
  }, [navigation]);

  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,

    Montserrat_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    if (isLoading) {
      return <LoadersAb />;
    } else {
      return (
        <SafeAreaView
          style={{
            backgroundColor: "#f8f2f2",
            flex: 1,
            marginTop: 35,
            marginBottom: 10,
            marginHorizontal: 8,
          }}
        >
          <View style={{ marginVertical: 5, alignItems: "center" }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "300",
                fontFamily: "Montserrat_900Black",
              }}
            >
              Favourite Items
            </Text>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={restaurantData}
            keyExtractor={(data) => {
              data.id.toString();
            }}
            renderItem={({ item }) => (
              <RestaurantItems
                name={item.name}
                image={item.image_url}
                rating={item.rating}
                address={item.location.address1}
                city={item.location.city}
                country={item.location.country}
                type={item?.type}
                onPress={() => {
                  navigation.navigate("RestaurantDetails", {
                    listing: item,
                    email: email,
                    URL: URL,
                    uid: uid,
                  });
                }}
              />
            )}
          />
        </SafeAreaView>
      );
    }
  }
}
