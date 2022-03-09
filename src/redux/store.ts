import {combineReducers, createStore} from "redux";
import {ProfilePageTypes, ProfileReducer} from "./reducers/ProfileReducer";
import {DialogsReducer, MessagePageTypes} from "./reducers/DialogsReducer";
import {UsersReducer} from "./reducers/UsersReducer";
import {AuthReducer} from "./reducers/AuthReducer";

export type StateTypes = {
    profilePage: ProfilePageTypes
    messagePage: MessagePageTypes
}

export const rootReducer = combineReducers({
    ProfileReducer,
    DialogsReducer,
    UsersReducer,
    AuthReducer,
});

export type AppType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);

