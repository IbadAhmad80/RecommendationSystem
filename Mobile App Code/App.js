node_modules/
.expo/
npm-debug.*
*.jks
*.p8
*.p12
*.key
*.mobileprovision
*.orig.*
web-build/

# macOS
.DS_Store
import { StatusBar } from "expo-status-bar";
import React from "react";
import { AsyncStorage } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./navugation/AuthNavigator";
import NavigationTheme from "./navugation/NavigationTheme";

export default function App() {
  React.useEffect(() => {
    const setURL = async () => {
      await AsyncStorage.setItem("URL", "http://a12b-35-199-175-233.ngrok.io");
    };
    setURL();
  }, []);
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
