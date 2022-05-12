import { combineReducers } from "redux";
import { ADD_EXPENSE } from "./actions";

let initialState = ["dfsdf", "SDfsdf"];

const expensesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXPENSE:
            return [...state, action.payload];

        default:
            return state;
    }
};

export default combineReducers({
    // expense: expenseEntry,
    list: expensesReducer,
});
