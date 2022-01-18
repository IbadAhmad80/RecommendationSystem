import React, { useState, useEffect } from "react";
import axios from "axios";
import * as firebase from "firebase";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  AsyncStorage,
} from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Montserrat_900Black,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import { Ionicons } from "@expo/vector-icons";
import SearchBar1 from "../components/home1/SearchBar1";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function Home1({ navigation }) {
  const [email, setemail] = useState("");
  const [famdata, setFamdata] = useState([]);
  const [URL, setURL] = useState("");

  useEffect(() => {
    async function getUserInfo() {
      let doc = await firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get();

      if (!doc.exists) {
        Alert.alert("No user data found!");
      } else {
        let dataObj = doc.data();

        saveUserData(dataObj.name, dataObj.createdAt, dataObj.photoURL);
      }
    }
    getUserInfo();
  });
  const saveUserData = async (name, creatAt, photoURL) => {
    try {
      await AsyncStorage.setItem("createdAt", creatAt.toString());
      await AsyncStorage.setItem("name", name);
      await AsyncStorage.setItem("photozURL", photoURL);
    } catch (err) {
      alert(err);
    }
  };

  const loadEmail = async () => {
    try {
      let name = await AsyncStorage.getItem("email");
      if (name !== null) {
        setemail(name);
      }
    } catch (error) {
      alert(err);
    }
  };
  const loadURL = async () => {
    try {
      let name = await AsyncStorage.getItem("URL");
      if (name !== null) {
        setURL(name);
      }
    } catch (error) {
      alert(error);
    }
  };
  const getFamousPlaces = async () => {
    navigation.navigate("Home");
  };

  useEffect(() => {
    loadEmail();
    loadURL();
  }, []);

  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <View>
          <ImageBackground
            blurRadius={2}
            source={{
              uri: "https://c8.alamy.com/comp/P6NGPM/served-table-in-restaurant-on-dark-background-P6NGPM.jpg",
            }}
            style={{ width: "100%", height: 330 }}
          >
            <View style={{ margin: 22, marginRight: 50 }}>
              <Text
                style={{
                  color: "#fff",

                  fontSize: 30,
                  fontWeight: "900",
                  marginTop: 30,
                  marginBottom: 30,
                  fontFamily: "Montserrat_900Black",
                }}
              >
                We Know Just the Place
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "red",
                  paddingVertical: 10,
                  paddingHorizontal: 18,

                  alignSelf: "flex-start",
                }}
              >
                <FontAwesome5
                  name={"search"}
                  size={20}
                  style={{
                    color: "white",
                    marginTop: 3,
                  }}
                />
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: "600",
                    paddingLeft: 10,
                    fontFamily: "Montserrat_600SemiBold",
                  }}
                >
                  Visitings Near You
                </Text>
              </View>
            </View>
          </ImageBackground>
          <TouchableOpacity
            style={{
              paddingHorizontal: 15,
              top: -38,
            }}
            onPress={getFamousPlaces}
          >
            <SearchBar1 />
          </TouchableOpacity>
          <View
            style={{
              paddingHorizontal: 25,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Ionicons name="restaurant" size={40} color="red" />
              <Text
                style={{
                  color: "#6e6969",
                  fontWeight: "600",
                  marginTop: 10,
                  fontFamily: "Montserrat_600SemiBold",
                }}
              >
                Restaurents
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <FontAwesome5 name="hospital-alt" size={35} color="red" />
              <Text
                style={{
                  color: "#6e6969",
                  fontWeight: "600",
                  marginTop: 15,

                  fontFamily: "Montserrat_600SemiBold",
                }}
              >
                Hospital
              </Text>
            </View>

            <View style={{ alignItems: "center" }}>
              <Ionicons name="cut" size={40} color="red" />
              <Text
                style={{
                  color: "#6e6969",
                  fontWeight: "600",
                  marginTop: 10,
                  fontFamily: "Montserrat_600SemiBold",
                }}
              >
                Barber
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <FontAwesome5 name="shopping-cart" size={40} color="red" />
              <Text
                style={{
                  color: "#6e6969",
                  fontWeight: "600",
                  marginTop: 10,
                  fontFamily: "Montserrat_600SemiBold",
                }}
              >
                Hotel
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                        import React, { useState, useEffect } from "react";
import axios from "axios";
import * as firebase from "firebase";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  AsyncStorage,
} from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Montserrat_900Black,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import { Ionicons } from "@expo/vector-icons";
import SearchBar1 from "../components/home1/SearchBar1";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function Home1({ navigation }) {
  const [email, setemail] = useState("");
  const [famdata, setFamdata] = useState([]);
  const [URL, setURL] = useState("");

  useEffect(() => {
    async function getUserInfo() {
      let doc = await firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get();

      if (!doc.exists) {
        Alert.alert("No user data found!");
      } else {
        let dataObj = doc.data();

        saveUserData(dataObj.name, dataObj.createdAt, dataObj.photoURL);
      }
    }
    getUserInfo();
  });
  const saveUserData = async (name, creatAt, photoURL) => {
    try {
      await AsyncStorage.setItem("createdAt", creatAt.toString());
      await AsyncStorage.setItem("name", name);
      await AsyncStorage.setItem("photozURL", photoURL);
    } catch (err) {
      alert(err);
    }
  };

  const loadEmail = async () => {
    try {
      let name = await AsyncStorage.getItem("email");
      if (name !== null) {
        setemail(name);
      }
    } catch (error) {
      alert(err);
    }
  };
  const loadURL = async () => {
    try {
      let name = await AsyncStorage.getItem("URL");
      if (name !== null) {
        setURL(name);
      }
    } catch (error) {
      alert(error);
    }
  };
  const getFamousPlaces = async () => {
    navigation.navigate("Home");
  };

  useEffect(() => {
    loadEmail();
    loadURL();
  }, []);

  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <View>
          <ImageBackground
            blurRadius={2}
            source={{
              uri: "https://c8.alamy.com/comp/P6NGPM/served-table-in-restaurant-on-dark-background-P6NGPM.jpg",
            }}
            style={{ width: "100%", height: 330 }}
          >
            <View style={{ margin: 22, marginRight: 50 }}>
              <Text
                style={{
                  color: "#fff",

                  fontSize: 30,
                  fontWeight: "900",
                  marginTop: 30,
                  marginBottom: 30,
                  fontFamily: "Montserrat_900Black",
                }}
              >
                We Know Just the Place
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "red",
                  paddingVertical: 10,
                  paddingHorizontal: 18,

                  alignSelf: "flex-start",
                }}
              >
                <FontAwesome5
                  name={"search"}
                  size={20}
                  style={{
                    color: "white",
                    marginTop: 3,
                  }}
                />
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: "600",
                    paddingLeft: 10,
                    fontFamily: "Montserrat_600SemiBold",
                  }}
                >
                  Visitings Near You
                </Text>
              </View>
            </View>
          </ImageBackground>
          <TouchableOpacity
            style={{
              paddingHorizontal: 15,
              top: -38,
            }}
            onPress={getFamousPlaces}
          >
            <SearchBar1 />
          </TouchableOpacity>
          <View
            style={{
              paddingHorizontal: 25,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Ionicons name="restaurant" size={40} color="red" />
              <Text
                style={{
                  color: "#6e6969",
                  fontWeight: "600",
                  marginTop: 10,
                  fontFamily: "Montserrat_600SemiBold",
                }}
              >
                Restaurents
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <FontAwesome5 name="hospital-alt" size={35} color="red" />
              <Text
                style={{
                  color: "#6e6969",
                  fontWeight: "600",
                  marginTop: 15,

                  fontFamily: "Montserrat_600SemiBold",
                }}
              >
                Hospital
              </Text>
            </View>

            <View style={{ alignItems: "center" }}>
              <Ionicons name="cut" size={40} color="red" />
              <Text
                style={{
                  color: "#6e6969",
                  fontWeight: "600",
                  marginTop: 10,
                  fontFamily: "Montserrat_600SemiBold",
                }}
              >
                Barber
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <FontAwesome5 name="shopping-cart" size={40} color="red" />
              <Text
                style={{
                  color: "#6e6969",
                  fontWeight: "600",
                  marginTop: 10,
                  fontFamily: "Montserrat_600SemiBold",
                }}
              >
                Hotel
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
