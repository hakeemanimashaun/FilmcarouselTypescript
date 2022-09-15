import { useNavigation } from "@react-navigation/native";
import React, { FunctionComponent, useRef } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  Image,
  Animated,
  Text,
} from "react-native";
import {
  BoldText,
  Button,
  RegularText,
} from "../../../components/generalStyled";
import { HomeScreenNavigationProp } from "../../../navigation/Types";

const { width, height } = Dimensions.get("screen");

const CarouselPage: FunctionComponent = (props) => {
  const xScroll = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={style.container}>
      <Animated.FlatList
        style={style.flatList}
        data={props.data}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        decelerationRate={"fast"}
        keyExtractor={(_, index) => index.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: xScroll } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const outputRange = ["-90deg", "0deg", "90deg"];

          const translateX = xScroll.interpolate({ inputRange, outputRange });

          return (
            <View style={style.imageContainer}>
              <BoldText>{item.original_name}</BoldText>
              <Animated.Image
                style={[style.image, { transform: [{ rotateZ: translateX }] }]}
                source={{
                  uri: `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`,
                }}
              />
              <Button
                onPress={() =>
                  navigation.navigate("Details", {
                    item: item,
                    poster_path: item.backdrop_path,
                    name: item.name,
                    id: item.id,
                    origin_country: item.origin_country,
                    original_language: item.original_language,
                    original_name: item.original_name,
                    overview: item.overview,
                    popularity: item.popularity,
                  })
                }
              >
                <RegularText>Show details</RegularText>
              </Button>
            </View>
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  flatList: { flexGrow: 0 },
  imageContainer: {
    width,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 120,
    width: width - 50,
    borderRadius: 20,
    resizeMode: "cover",
  },
});

export default CarouselPage;
