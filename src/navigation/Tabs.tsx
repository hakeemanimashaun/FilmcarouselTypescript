import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { BottomTabNavigatorParamList } from "./Types";
import HomeStackNavigator from "./HomeStack";
import WishList from "../screens/wishlist/WishList";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, TouchableOpacity } from "react-native";
import { Title } from "./components/styled";

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused: boolean, color: string, size: number }) => (
            <Ionicons name="home" size={25} color={"green"} />
          ),
          tabBarLabel: ({ focused: boolean, color: string }) => (
            <Title>home</Title>
          ),
        }}
      />
      <Tab.Screen
        name="WishList"
        component={WishList}
        options={{
          headerTitle: "Favourites",
          tabBarIcon: ({ focused: boolean, color: string, size: number }) => (
            <Ionicons name="heart" size={25} color="green" />
          ),
          tabBarLabel: ({ focused: boolean, color: string }) => (
            <Title>wishlist</Title>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
