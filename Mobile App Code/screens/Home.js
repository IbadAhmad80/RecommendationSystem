import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  AsyncStorage,
  Button,
} from "react-native";
import Categaries from "../components/home/Categories";
import Constants from "expo-constants";
import * as Location from "expo-location";
import axios from "axios";
import * as Permissions from "expo-permissions";

import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";
import SearchBar2 from "../components/home/SearchBar2";

import Geocoder from "react-native-geocoding";

Geocoder.init("use api key");
// Location.requestPermissionsAsync();

export default function Home({ navigation }) {
  const [catagaries, setCatagaried] = useState("restaurants");
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState(null);
  const [cordinates, setCordinates] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [URL, setURL] = useState("");
  const [data, setData] = useState([]);
  const [email, setemail] = useState("");
  const [uid, setUid] = useState("");
  const [randomData, setRandomData] = useState(false);
  const [name, setName] = React.useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [createdAt, setCreatedAt] = useState(null);

  (() => {
    // setRandomData(true);
    if (data.length === 0) {
      axios.get(`${URL}/api/allRandomBusiness`).then(({ data }) => {
        if (data) {
          let wantedArray = [];

          wantedArray.push(...data.hotels);

          wantedArray.push(...data.hospitals);
          wantedArray.push(...data.barbers);

          var a = { data: wantedArray };

          setData(a);

          setIsLoading(false);
          setRandomData(false);
        }
      });
    }
  })();

  const loadUserData = async () => {
    try {
      let url1 = await AsyncStorage.getItem("URL");
      let uid1 = await AsyncStorage.getItem("uid");
      let email = await AsyncStorage.getItem("email");
      let name = await AsyncStorage.getItem("name");
      let time = await AsyncStorage.getItem("createdAt");
      let image = await AsyncStorage.getItem("photoURL");

      if (url1 !== null) {
        setURL(url1);
      }
      if (uid1 !== null) {
        setUid(uid1);
      }

      if (email !== null) {
        setemail(email);
      }
      if (name !== null) {
        setName(name);
      }
      if (time !== "") {
        setCreatedAt(time);
      }
      if (image !== "") {
        setImageURL(image);
      }
    } catch (err) {
      alert(err);
    }
  };

  const attemptGeocodeAsync = async () => {
    try {
      Geocoder.init("AIzaSyD2d-znOMcFJpf5dPNcYhjeRA27CtJbCQ4");
      const result = await Location.geocodeAsync(city);

      if (result) {
        setLongitude(result[0].longitude);
        setLatitude(result[0].latitude);
        if (result) {
          axios
            .post(`${URL}/api/predictions`, {
              longitude: result[0].longitude,
              latituide: result[0].latitude,
   import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  AsyncStorage,
  Button,
} from "react-native";
import Categaries from "../components/home/Categories";
import Constants from "expo-constants";
import * as Location from "expo-location";
import axios from "axios";
import * as Permissions from "expo-permissions";

import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";
import SearchBar2 from "../components/home/SearchBar2";

import Geocoder from "react-native-geocoding";

Geocoder.init("use api key");
// Location.requestPermissionsAsync();

export default function Home({ navigation }) {
  const [catagaries, setCatagaried] = useState("restaurants");
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState(null);
  const [cordinates, setCordinates] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [URL, setURL] = useState("");
  const [data, setData] = useState([]);
  const [email, setemail] = useState("");
  const [uid, setUid] = useState("");
  const [randomData, setRandomData] = useState(false);
  const [name, setName] = React.useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [createdAt, setCreatedAt] = useState(null);

  (() => {
    // setRandomData(true);
    if (data.length === 0) {
      axios.get(`${URL}/api/allRandomBusiness`).then(({ data }) => {
        if (data) {
          let wantedArray = [];

          wantedArray.push(...data.hotels);

          wantedArray.push(...data.hospitals);
          wantedArray.push(...data.barbers);

          var a = { data: wantedArray };

          setData(a);

          setIsLoading(false);
          setRandomData(false);
        }
      });
    }
  })();

  const loadUserData = async () => {
    try {
      let url1 = await AsyncStorage.getItem("URL");
      let uid1 = await AsyncStorage.getItem("uid");
      let email = await AsyncStorage.getItem("email");
      let name = await AsyncStorage.getItem("name");
      let time = await AsyncStorage.getItem("createdAt");
      let image = await AsyncStorage.getItem("photoURL");

      if (url1 !== null) {
        setURL(url1);
      }
      if (uid1 !== null) {
        setUid(uid1);
      }

      if (email !== null) {
        setemail(email);
      }
      if (name !== null) {
        setName(name);
      }
      if (time !== "") {
        setCreatedAt(time);
      }
      if (image !== "") {
        setImageURL(image);
      }
    } catch (err) {
      alert(err);
    }
  };

  const attemptGeocodeAsync = async () => {
    try {
      Geocoder.init("AIzaSyD2d-znOMcFJpf5dPNcYhjeRA27CtJbCQ4");
      const result = await Location.geocodeAsync(city);

      if (result) {
        setLongitude(result[0].longitude);
        setLatitude(result[0].latitude);
        if (result) {
          axios
            .post(`${URL}/api/predictions`, {
              longitude: result[0].longitude,
              latituide: result[0].latitude,
              category: catagaries,
            })
            .then(({ data, status }) => {
              setData(data);
              setIsLoading(false);

              if (status === 201) {
                alert("Data fetched from Database succesfully");
              }
              if (status === 200) {
                storeData(data, result[0].longitude, result[0].latitude);
              }
            })
            .catch((error) => {
              alert("Cant You Try Again :(", error);
            });

          const storeData = async (data, longitude, latitude) => {
            const locations = {
              longitude,
              latitude,
              [catagaries]: data.data,
            };
            const unselectedCategories = [
              "restaurants",
              "hotels",
              "barbers",
              "hospitals",
            ].filter((category) => {
              return category !== catagaries;
            });
            locations[unselectedCategories[0]] =
              locations[unselectedCategories[1]] =
              locations[unselectedCategories[2]] =
                [];
            try {
              const res = await axios.post(`${URL}/api/store`, {
                data: locations,
                businessType: catagaries,
              });
              res && alert("Data is been stored Successfully");
            } catch (error) {
              alert("Looks like data might not be backed up successfully :(");
            }
          };
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    loadUserData();
    if (city) {
      attemptGeocodeAsync();
    }
  }, [city, catagaries]);
  return (
    <SafeAreaView style={{ backgroundColor: "#f8f2f2", flex: 1 }}>
      <View
        style={{
          marginHorizontal: 8,
          backgroundColor: "#fff",
          padding: 10,
          borderRadius: 15,
          paddingTop: 30,
        }}
      >
        <SearchBar2 setCity={setCity} />
      </View>
      <Categaries setCatagaried={setCatagaried} />
      {data && (
        <View
          style={{
            flex: 1,
            marginBottom: 10,
            marginHorizontal: 8,
          }}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data.data}
            keyExtractor={(data) => {
              data.id.toString();
            }}
            renderItem={({ item }) => (
              <RestaurantItems
                name={item.name}
                image={item.image_url}
                rating={item?.system_rating || item.rating}
                address={item.location.address1}
                city={item.location.city}
                country={item.location.country}
                type={item?.type}
                onPress={() =>
                  navigation.navigate("RestaurantDetails", {
                    listing: item,
                    email: email,
                    URL: URL,
                    uid: uid,
                    name: name,
                    createdAt: createdAt,
                    imageURL: imageURL,
                  })
                }
              />
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
}
