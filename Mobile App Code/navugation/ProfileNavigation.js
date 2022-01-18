import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "../screens/ProfileScreen";
import Favourateplaces from "../screens/Favourateplaces";

const Stack = createStackNavigator();

const ProfileNavigation = () => (
  <Stack.Navigator initialRouteName="Profile" mode="modal">
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Favourite"
      component={Favourateplaces}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
export default ProfileNavigation;
                                               import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "../screens/ProfileScreen";
import Favourateplaces from "../screens/Favourateplaces";

const Stack = createStackNavigator();

const ProfileNavigation = () => (
  <Stack.Navigator initialRouteName="Profile" mode="modal">
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Favourite"
      component={Favourateplaces}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
export default ProfileNavigation;
