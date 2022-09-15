import { AddFavAction, FavListState } from "../types";
import { FavListAction } from "../types";
import { FAV_ACTION_TYPES } from "./actions";

export const initialState: FavListState = [];

const userList = (
    state: FavListState = initialState,
    action: FavListAction
) => {
    //const newState: FavListState = deepClone(state); // a deep-cloning function
    switch (action.type) {
        case FAV_ACTION_TYPES.ADD_FAV:

            const { userData } = <AddFavAction>action;
            return [...state, {
                userData
            }];


        default:
            return state;
    }
}
