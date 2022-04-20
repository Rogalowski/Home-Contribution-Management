import { combineReducers } from "redux";
import { ADD_TODO, TODO_REMOVED, TODO_TOGGLED } from "./actions";

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];

                return todo;
            });
        default:
            return state;
    }
};

export default combineReducers({
    todos,
});
