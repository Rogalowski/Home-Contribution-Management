import { combineReducers } from "redux";
import { ADD_EXPENSE } from "./actions";

const initialState = [
    {
        name: "jajka",
        price: 5,
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
const expenseListReducer = (state = initialState) => {
    // if (action.type === ADD_EXPENSE) {
    //     return [...state, action.payload];
    // } else {
    return state;
};

export  combineReducers({
    // expense: expenseEntry,
    expenseListReducer,
});
