import {combineReducers} from "redux";
import active from "./burgerMenu";

export const reducers = combineReducers({
    active: active,
});