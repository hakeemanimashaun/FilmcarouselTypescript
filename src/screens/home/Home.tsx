import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  BaseView,
  Spacer,
  ViewContainer,
} from "../../components/generalStyled";
import { HomeScreenNavigationProp } from "../../navigation/Types";
import Carousel from "react-native-snap-carousel";
import CarouselItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./components/Carousel";
import axios from "axios";
import { FlatList } from "react-native";
import CarouselPage from "./components/CaarouselPage";

const baseUrl = "https://api.themoviedb.org/3/tv";
export type data = {
  page: number;
  results: {
    backdrop_path: string;
    poster_path: string;
    name: string;
    id: number;
    origin_country: string;
    original_language: string;
    original_name: string;
    overview: string;
    popularity: string;
  }[];
  total_pages: number;
  total_results: number;
};
const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const isCarousel = useRef(null);
  const [data1, setData1] = useState<data>();
  const [data2, setData2] = useState<data>();
  const [data3, setData3] = useState<data>();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    axios({
      method: "get",
      url: `${baseUrl}/popular?api_key=c9a04294fccf1810481e6847af0ca497&language=en-US&page=${page}`,
    })
      .then((response) => {
        setData1(response.data);
        setData2(response.data);
        setData3(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <BaseView>
      <ViewContainer>
        <CarouselPage data={data1?.results} />
      </ViewContainer>

      <ViewContainer>
        <CarouselPage data={data2?.results} />
      </ViewContainer>

      <ViewContainer>
        <CarouselPage data={data3?.results} />
      </ViewContainer>
    </BaseView>
  );
};

export default Home;
