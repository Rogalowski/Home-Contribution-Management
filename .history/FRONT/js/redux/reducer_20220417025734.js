import { combineReducers } from "redux";
import { ADD_EXPENSE } from "./actions";

let initialState = [
    {
        name: "jajka",
        price: 10,
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
    // }
};

export default combineReducers({
    // expense: expenseEntry,
    expenseListReducer,
});
