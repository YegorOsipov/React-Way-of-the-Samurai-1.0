import {combineReducers, createStore} from "redux";
import {ProfilePageTypes, ProfileReducer} from "./reducers/ProfileReducer";
import {DialogsReducer, MessagePageTypes} from "./reducers/DialogsReducer";
import {UsersReducer} from "./reducers/UsersReducer";

export type StateTypes = {
    profilePage: ProfilePageTypes
    messagePage: MessagePageTypes
}

export const rootReducer = combineReducers({
    ProfileReducer,
    DialogsReducer,
    UsersReducer
});

export type AppType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);

