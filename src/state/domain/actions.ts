import { AddFavAction } from "../types";

export enum FAV_ACTION_TYPES {
    ADD_FAV : 'ADD_USER',
}
export const addFav = (backdrop_path: string,
    poster_path: string,
    name: string,
    id: number,
    origin_country: string,
    original_language: string,
    original_name: string,
    overview: string,
    popularity: string,): AddFavAction => ({
        type: FAV_ACTION_TYPES.ADD_FAV,
        userData: {
            backdrop_path,
            poster_path,
            name,
            id,
            origin_country,
            original_language,
            original_name,
            overview,
            popularity,
        }
    });