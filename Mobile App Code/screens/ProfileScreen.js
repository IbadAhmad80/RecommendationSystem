import React from "react";
import { useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
} from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import AppLoading from "expo-app-loading";
import { FontAwesome } from "@expo/vector-icons";

import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";

import { logout } from "../firebase";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { date } from "yup/lib/locale";

const ProfileScreen = ({ navigation }) => {
  const [email, setemail] = React.useState("");
  const [URL, setURL] = React.useState("");
  const [name, setName] = React.useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [createdAt, setCreatedAt] = useState(null);
  var tm = null;

  const loadUserData = async () => {
    try {
      let time = await AsyncStorage.getItem("createdAt");

      let name = await AsyncStorage.getItem("name");

      let email = await AsyncStorage.getItem("email");

      let image = await AsyncStorage.getItem("photoURL");

      if (email !== null) {
        setemail(email);
      }
      if (name !== null) {
        setName(name);
      }
      if (time !== "") {
        const t = new Date(time);

        setCreatedAt(t);
      }
      if (image !== "") {
        setImageURL(image);
      }
    } catch (err) {
      alert(err);
    }
  };

  React.useEffect(() => {
    loadUserData();
  }, []);

  var date = new Date(tm);

  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,

    Montserrat_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: "row", marginTop: 30 }}>
            <View style={{ backgroundColor: "#FF6347", borderRadius: 50 }}>
              <Text
                style={{
                  fontSize: 45,
                  fontWeight: "900",
                  fontFamily: "Montserrat_900Black",
                  alignContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 17,

                  color: "#fff",
                }}
              >
                {name?.charAt(0).toUpperCase()}
              </Text>
            </View>
            <View style={{ marginLeft: 20 }}>
              <Title
                style={[
                  styles.title,
                  {
                    marginTop: 15,
                    marginBottom: 5,
                    fontWeight: "900",
                    fontFamily: "Montserrat_900Black",
                  },
                ]}
              >
                {name}
              </Title>
              <Caption style={styles.caption}>{email}</Caption>
            </View>
          </View>
        </View>

        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="email" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>{email}</Text>
            </View>
          </TouchableRipple>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Favourite", { email: email, URL: URL });
            }}
          >
            <View style={styles.menuItem}>
              <Icon name="cards-heart" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Favourate Places</Text>
            </View>
          </TouchableOpacity>

          <TouchableRipple
            onPress={() => {
              logout();
              navigation.navigate("Welcome");
            }}
          >
            <View style={styles.menuItem}>
              <Icon name="login" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Logout</Text>
            </View>
          </TouchableRipple>
        </View>
      </SafeAreaView>
    );
  }
};

export defaulimport React from "react";
import { useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
} from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import AppLoading from "expo-app-loading";
import { FontAwesome } from "@expo/vector-icons";

import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";

import { logout } from "../firebase";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { date } from "yup/lib/locale";

const ProfileScreen = ({ navigation }) => {
  const [email, setemail] = React.useState("");
  const [URL, setURL] = React.useState("");
  const [name, setName] = React.useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [createdAt, setCreatedAt] = useState(null);
  var tm = null;

  const loadUserData = async () => {
    try {
      let time = await AsyncStorage.getItem("createdAt");

      let name = await AsyncStorage.getItem("name");

      let email = await AsyncStorage.getItem("email");

      let image = await AsyncStorage.getItem("photoURL");

      if (email !== null) {
        setemail(email);
      }
      if (name !== null) {
        setName(name);
      }
      if (time !== "") {
        const t = new Date(time);

        setCreatedAt(t);
      }
      if (image !== "") {
        setImageURL(image);
      }
    } catch (err) {
      alert(err);
    }
  };

  React.useEffect(() => {
    loadUserData();
  }, []);

  var date = new Date(tm);

  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,

    Montserrat_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: "row", marginTop: 30 }}>
            <View style={{ backgroundColor: "#FF6347", borderRadius: 50 }}>
              <Text
                style={{
                  fontSize: 45,
                  fontWeight: "900",
                  fontFamily: "Montserrat_900Black",
                  alignContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 17,

                  color: "#fff",
                }}
              >
                {name?.charAt(0).toUpperCase()}
              </Text>
            </View>
            <View style={{ marginLeft: 20 }}>
              <Title
                style={[
                  styles.title,
                  {
                    marginTop: 15,
                    marginBottom: 5,
                    fontWeight: "900",
                    fontFamily: "Montserrat_900Black",
                  },
                ]}
              >
                {name}
              </Title>
              <Caption style={styles.caption}>{email}</Caption>
            </View>
          </View>
        </View>

        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="email" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>{email}</Text>
            </View>
          </TouchableRipple>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Favourite", { email: email, URL: URL });
            }}
          >
            <View style={styles.menuItem}>
              <Icon name="cards-heart" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Favourate Places</Text>
            </View>
          </TouchableOpacity>

          <TouchableRipple
            onPress={() => {
              logout();
              navigation.navigate("Welcome");
            }}
          >
            <View style={styles.menuItem}>
              <Icon name="login" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Logout</Text>
            </View>
          </TouchableRipple>
        </View>
      </SafeAreaView>
    );
  }
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  userInfoSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
    fontWeight: "600",
    fontFamily: "Montserrat_600SemiBold",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "600",
    fontFamily: "Montserrat_600SemiBold",
  },
  cardsWrapper: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#fff",
  },
  cardTitle: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardDetails: {
    marginTop: 2,
    fontSize: 12,
    color: "#444",
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});
