import { ADD_EXPENSE, ADD_USER } from "./actions";
import { combineReducers } from "redux";

const initUser = {
    jacek: 0,
    someone: 0,
};
function users(state = initUser, action) {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                [action.payload]: 0,
            };
        case ADD_EXPENSE:
            return {
                ...state,
                [action.payload.userId]: state[action.payload.userId] + 1,
            };

        default:
            return state;
    }
}

// function expenses(state = [], action) {
//     switch (action.type) {
//         case ADD_EXPENSE:
//             return [
//                 ...state,
//                 [action.payload.title + " ", action.payload.price],
//             ];

//         default:
//             return state;
//     }
// }
function expenses(
    state = [
        {
            title: "test",
            price: "123",
        },
    ],
    action
) {
    switch (action.type) {
        case ADD_EXPENSE:
            return [
                ...state,

                {
                    title: action.payload.title,
                    price: action.payload.price,
                },
            ];

        default:
            return state;
    }
}

export default combineReducers({
    expenses,
    users,
});
