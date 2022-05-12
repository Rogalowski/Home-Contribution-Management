import { combineReducers } from "redux";
import { ADD_EXPENSE } from "./actions";

let initialState = [
    {
        name: "jajka",
        price: 10,
    },
    {
        name: "owoce",
        price: 11,
    },
];

// const expensesReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_EXPENSE:
//             return [...state, action.payload];

//         default:
//             return state;
//     }
// };
export const expenseListReducer = (state = initialState, action) => {
    if (action.type === ADD_EXPENSE) {
        return [...state, action.payload];
    } else {
        return state;
    }
};

export default combineReducers({
    // expense: expenseEntry,
    expenseListReducer,
});
