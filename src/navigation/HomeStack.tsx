import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/home/Home";
import Details from "../screens/details/Details";
import { HomeStackNavigatorParamList } from "./Types";

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: "Films" }}
      />
      <HomeStack.Screen
        name="Details"
        component={Details}
        options={{ headerTitle: "Film Details" }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
