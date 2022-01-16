import {combineReducers, createStore} from "redux";
import {ProfilePageTypes, ProfileReducer} from "./reducers/ProfileReducer";
import {ActionsType, DialogsReducer, MessagePageTypes} from "./reducers/DialogsReducer";

export type StateTypes = {
    profilePage: ProfilePageTypes
    messagePage: MessagePageTypes
}
export type StoreType = {
    _state: StateTypes
    getState: () => StateTypes
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

export const rootReducer = combineReducers({
    ProfileReducer,
    DialogsReducer
});

export type AppType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);

