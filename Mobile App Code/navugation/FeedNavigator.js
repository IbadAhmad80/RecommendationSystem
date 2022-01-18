import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home1 from "../screens/Home1";
import Home from "../screens/Home";
import RestaurantDetails from "../screens/RestaurantDetails";
const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator initialRouteName="Home1" mode="modal">
    <Stack.Screen
      name="Home1"
      component={Home1}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="RestaurantDetails"
      component={RestaurantDetails}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default FeedNavigator;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home1 from "../screens/Home1";
import Home from "../screens/Home";
import RestaurantDetails from "../screens/RestaurantDetails";
const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator initialRouteName="Home1" mode="modal">
    <Stack.Screen
      name="Home1"
      component={Home1}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="RestaurantDetails"
      component={RestaurantDetails}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default FeedNavigator;
