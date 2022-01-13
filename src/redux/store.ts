import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./reducers/ProfileReducer";
import {DialogsReducer} from "./reducers/DialogsReducer";
import {StoreType} from "./state";

export const storeReducer = combineReducers({
    ProfileReducer,
    DialogsReducer
});

export const store: StoreType = createStore(storeReducer);
