import * as firebase from "firebase";
import "firebase/firestore";

import { Alert, AsyncStorage } from "react-native";

const firebaseConfig = {
  apiKey: "AIzaSyDoJU7QkTxPHTY87SifU6hOC0-xq6b9Nco",
  authDomain: "cleverus-1b8ce.firebaseapp.com",
  projectId: "cleverus-1b8ce",
  storageBucket: "cleverus-1b8ce.appspot.com",
  messagingSenderId: "75import * as firebase from "firebase";
import "firebase/firestore";

import { Alert, AsyncStorage } from "react-native";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

export const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();

export const db = app.firestore();
export async function registerWithEmailAndPassword(
  name,
  email,
  password,
  navigation
) {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;

    await db.collection("users").doc(user.uid).set({
      uid: user.uid,
      name: name,
      authProvider: "local",
      email: email,
      createdAt: Date.now(),
    });
    navigation.navigate("Login");
  } catch (err) {
    console.log(err);
    Alert.alert("There is something wrong!!!!", err.message);
  }
}

export async function signInWithEmailAndPassword(email, password, navigation) {
  try {
    const res = await auth.signInWithEmailAndPassword(email, password);
    if (res) {
      navigation.navigate("Appnav");
    }

    // const userDocument = await db.firestore().collection("users").get();

    saveEmail(email, res.user.uid);
  } catch (err) {
    console.log(err);
    Alert.alert("There is something wrong!!", err.message);
  }
}
const saveEmail = async (email, uid) => {
  try {
    await AsyncStorage.setItem("email", email);
    await AsyncStorage.setItem("uid", uid);

    // await AsyncStorage.setItem("uid",)
  } catch (error) {
    alert(err);
  }
};

export async function logout() {
  try {
    await auth.signOut();
    await AsyncStorage.removeItem("email");
    await AsyncStorage.removeItem("uid");

    await AsyncStorage.removeItem("name");
    await AsyncStorage.removeItem("createdAt");
    await AsyncStorage.removeItem("photoURL");
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
}
