import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import cogoToast from "cogo-toast";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "cleverus-1b8ce",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const storage = app.storage();
const timestamp = app.firestore?.FieldValue?.serverTimestamp || null;

const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;

    db.collection("users").doc(user.uid).set(
      {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        createdAt: Date.now(),
        photoURL: user.photoURL,
      },
      { merge: true }
    );
  } catch (err) {
    console.log(err.message);
  }
};

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    cogoToast.error(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;

    await db.collection("users").doc(user.uid).set(
      {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
        createdAt: Date.now(),
      },
      { merge: true }
    );
  } catch (err) {
    console.error(err);
    cogoToast.error(err.message);
  }
};

const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    cogoToast.success("Password reset email sent");
  } catch (err) {
    console.error(err);
    cogoToast.error(err.message);
  }
};

const logout = () => {
  auth.signOut();
  window.localStorage.removeItem("user");
};

export {
  auth,
  db,
  storage,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
  timestamp,
};
