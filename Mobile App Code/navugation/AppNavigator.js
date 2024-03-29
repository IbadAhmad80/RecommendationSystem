import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FeedNavigator from "./FeedNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProfileNavigation from "./ProfileNavigation";
import Favourateplaces from "../screens/Favourateplaces";
import { AsyncStorage } from "react-native";

const Tab = createBottomTabNavigator();
export default function AppNavigator() {
  return (
    <Tab.Navigator initialRouteName="Feed" shifting={true}>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarLabel: "Home",

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={"#6e6969"} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Search "
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="map-search-outline"
              color={"#6e6969"}
              size={size}
            />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="Favourates "
        component={Favourateplaces}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="fire" color={"#6e6969"} size={size} />
          ),
        }}
      /> */}

      <Tab.Screen
        name="Account "
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account"
              color={"#6e6969"}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
                                                                                                                                                                                                                                                                                                                                               import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FeedNavigator from "./FeedNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProfileNavigation from "./ProfileNavigation";
import Favourateplaces from "../screens/Favourateplaces";
import { AsyncStorage } from "react-native";

const Tab = createBottomTabNavigator();
export default function AppNavigator() {
  return (
    <Tab.Navigator initialRouteName="Feed" shifting={true}>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarLabel: "Home",

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={"#6e6969"} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Search "
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="map-search-outline"
              color={"#6e6969"}
              size={size}
            />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="Favourates "
        component={Favourateplaces}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="fire" color={"#6e6969"} size={size} />
          ),
        }}
      /> */}

      <Tab.Screen
        name="Account "
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account"
              color={"#6e6969"}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
