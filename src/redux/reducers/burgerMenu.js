import {TOGGLE_BURGER_MENU} from "../action-types/burgerMenu";

const initialState = {
    active: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_BURGER_MENU: {
            return {
                ...state,
                active: !state.active
            }
        }
        default: {
            return state
        }
    }
}