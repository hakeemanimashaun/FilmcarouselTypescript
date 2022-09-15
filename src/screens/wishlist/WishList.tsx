import React, { useEffect } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BaseView } from "../../components/generalStyled";

const WishList = () => {
  useEffect(() => {
    try {
      const keys = AsyncStorage.getAllKeys();
      //const result = AsyncStorage.multiGet(keys);
      // return result.map((req) => JSON.parse(req)).forEach(console.log);
      console.log(keys, "result");
    } catch (error) {
      console.error(error);
    }
  }, []);
  return <BaseView></BaseView>;
};

export default WishList;
