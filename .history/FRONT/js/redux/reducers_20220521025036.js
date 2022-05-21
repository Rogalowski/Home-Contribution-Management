import {
    ADD_EXPENSE,
    ADD_USER,
    EDIT_EXPENSE,
    REMOVE_EXPENSE,
    REMOVE_USER,
} from "./actions";
import { combineReducers } from "redux";
import { v4 as uuidv4 } from "uuid";

const initUser = [
    {
        // id: 1,
        user: "jacek",
        spent: 0,
    },
    {
        // id: 2,
        user: "someone",
        spent: 0,
    },
];
// const initUser = {
// jacek: 0,
// someone: 0,
// };
function users(state = initUser, action) {
    switch (action.type) {
        case ADD_USER:
            // return
            //     ...state,
            //     [action.payload]: 0,
            // };
            return [
                ...state.filter((p) => p.user !== action.payload.user),
                {
                    // id: uuidv4(),
                    user: action.payload.user,
                    spent: 0,
                },
            ];
        case REMOVE_USER:
            console.log(
                state.filter((userEl) => userEl.user !== action.payload.user)
            );
            // const { user, spent } = action.payload;
            return state.filter(
                (userEl) => userEl.user !== action.payload.user
            );

        // state.filter(
        //     (userElement) => userElement.user !== action.payload.user
        // );

        case ADD_EXPENSE:
            // let summ = "";

            console.log("sdgfdsgfdgdfgdfg " + state[action.payload.spent]);

            // return [
            //     ...state.filter((p) => p.user !== action.payload.userId),

            //     {
            //         user: action.payload.userId,
            //         spent: action.payload.price,
            //     },
            //]
            return state.map((userElement) => {
                if (userElement.user === action.payload.userId) {
                    return {
                        ...userElement,
                        spent:
                            userElement.spent +
                            parseFloat(action.payload.price),
                    };
                }
                console.log("Current State: " + state);
                return userElement;
            });

        case REMOVE_EXPENSE:
            return state.map((userElement) => {
                if (userElement.user === action.payload.userId) {
                    return {
                        ...userElement,
                        spent:
                            userElement.spent -
                            parseFloat(action.payload.price),
                    };
                }
                return userElement;
            });
        //     return {
        //         ...state,
        //         [action.payload.userId]:
        //             state[action.payload.userId] -
        //             parseFloat(action.payload.price),
        //     };

        default:
            return state;
    }
}

function expenses(
    state = [
        {
            id: 1,
            date: "13.05.2022, 22:53:24",
            title: "test",
            price: 0,
            userId: "jacek",
            hidden: true,
        },
    ],
    action
) {
    const currentDate = new Date();

    switch (action.type) {
        case ADD_EXPENSE:
            return [
                ...state,

                {
                    id: uuidv4(),
                    date: currentDate.toLocaleString("pl-PL"),
                    title: action.payload.title,
                    price: parseFloat(action.payload.price),
                    userId: action.payload.userId,
                    hidden: true,
                },
            ];
        case EDIT_EXPENSE:
            const { title, price, userId } = action.payload;
            const idExpense = state.expenses.findIndex(
                (expense) => expense.id !== action.payload
            );
            return [
                ...state,
                {
                    title: (state.title = action.payload),
                    price: price,
                    userId: userId,
                },
            ];

        case REMOVE_EXPENSE:
            const { id, date } = action.payload;

            return state.filter(
                (expense) => expense.id !== id
                // expense.price !== price &&
                // expense.title !== title &&
                // expense.userId !== userId
            );

        default:
            return state;
    }
}

export default combineReducers({
    expenses,
    users,
});
