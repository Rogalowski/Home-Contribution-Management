import { combineReducers } from "redux";
import { ADD_EXPENSE } from "./actions";

let initialState = [];

const expenses = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXPENSE:
            return [...state, action.payload];

        default:
            return state;
    }
};

export default combineReducers({
    expenses,
});
