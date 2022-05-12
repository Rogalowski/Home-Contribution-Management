// Reducer zwracający tablicę produktów

import { combineReducers } from "redux";
import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actions";

const init = [
    {
        name: "jajko",
        price: 10,
    },
];

const basket = (state = init, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload];
        case REMOVE_PRODUCT:
            const { name, price } = action.payload;
            return state.filter(
                (product) => product.name !== name && product.price !== price
            );
        default:
            return state;
    }
};

export default combineReducers({
    basket,
});
