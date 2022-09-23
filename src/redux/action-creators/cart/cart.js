import {ADD_TO_CART} from "../../action-types/cart";


export const onAddToCart = (object) => ({
    type: ADD_TO_CART,
    payload: object
});


