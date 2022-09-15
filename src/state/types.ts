export type Fav = {
    backdrop_path: string;
    poster_path: string;
    name: string;
    id: number;
    origin_country: string;
    original_language: string;
    original_name: string;
    overview: string;
    popularity: string;
}
export type FavListState = Fav[];

export type AddFavAction = {
    type: string;
    userData: Fav;
}
export type FavListAction = AddFavAction

export type AppState = {
    userList: FavListState,

}