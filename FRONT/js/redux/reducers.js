import { ADD_EXPENSE, ADD_USER, REMOVE_EXPENSE, REMOVE_USER } from "./actions";
import { combineReducers } from "redux";
import { v4 as uuidv4 } from "uuid";

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
                [action.payload.userId]:
                    state[action.payload.userId] +
                    parseFloat(action.payload.price),
            };
        case REMOVE_EXPENSE:
            return {
                ...state,
                [action.payload.userId]:
                    state[action.payload.userId] -
                    parseFloat(action.payload.price),
            };

        case REMOVE_USER:
            const { userId } = action.payload;

            return state.filter((user) => user.userId !== userId);

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
                    id: uuidv4(), //to fix

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
