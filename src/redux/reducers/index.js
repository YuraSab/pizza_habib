import {combineReducers} from "redux";
import active from "./burgerMenu";
import cart from "./cart";

export const reducers = combineReducers({
    active: active,
    cart: cart
});