import { ADD_EXPENSE, ADD_USER, REMOVE_EXPENSE, REMOVE_USER } from "./actions";
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

        case REMOVE_USER:
            const { userId } = action.payload;

            return delete state[userId];

        // return state.filter((user) => user.userId !== userId);
        // return state.filter((user) => user.userId !== userId);
        // return Object.keys(state).filter(
        //     () => state[action.payload] !== action.payload
        // );

        // return delete state[userId];

        //         return {
        //             let filtered = {}
        // Object.keys(state).filter(prop => {
        //     if (prop !== action.payload) {
        //         filtered[prop] = obj[prop]
        //     }
        // })
        //         }

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
                    date: currentDate.toLocaleString(),
                    title: action.payload.title,
                    price: parseFloat(action.payload.price),
                    userId: action.payload.userId,
                },
            ];
        case REMOVE_EXPENSE:
            const { id, date, title, price, userId } = action.payload;

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
