import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { DetailsScreenRouteProp } from "../../navigation/Types";
import {
  BaseView,
  BoldText,
  Button,
  MediumText,
  RegularText,
  Spacer,
  ViewContainer,
} from "../../components/generalStyled";
import { Image, TopView } from "./components/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Details = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const {
    poster_path,
    name,
    id,
    item,
    origin_country,
    original_language,
    original_name,
    overview,
    popularity,
  } = route.params;

  return (
    <BaseView>
      <Spacer />
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{
            uri: `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`,
          }}
        />
        <ViewContainer>
          <Button
            onPress={() => AsyncStorage.setItem(id.toString(), id.toString())}
          >
            <RegularText>add to wishlist</RegularText>
          </Button>
          <Spacer />
          <BoldText> {name}</BoldText>
          <MediumText>Downloads: {popularity}</MediumText>
        </ViewContainer>
      </View>
      <Spacer />
      <ViewContainer>
        <Spacer />
        <MediumText>Origin: {origin_country}</MediumText>
        <RegularText>Language: {original_language}</RegularText>
        <Spacer />
        <RegularText>{overview}</RegularText>
      </ViewContainer>
    </BaseView>
  );
};

export default Details;
