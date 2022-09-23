import {ADD_TO_CART} from "../../action-types/cart";


export const onAddToCart = (payload) => ({
    type: ADD_TO_CART,
    payload: payload
});


