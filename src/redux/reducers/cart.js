import {ADD_TO_CART} from "../action-types/cart";
import {drinks} from "../../DataBase/drinks_DB/drinksDB";
import {pizzas} from "../../DataBase/pizza_DB/pizzaDB";

const allProducts = [pizzas, drinks];


const initialState = {
    cart: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_CART: {

            const isAdded = allProducts.filter(el => el.id !== action.payload.id);

            if(allProducts.length === isAdded.length) {
                isAdded.push(action.payload)
            }

            return{
                ...state,
                cart: isAdded
            }
        }
        default: {
            return state
        }
    }
}