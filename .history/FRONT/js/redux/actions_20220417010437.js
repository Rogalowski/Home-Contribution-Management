export const ADD_TODO = "ADD_TODO";
export const TODO_TOGGLED = "TODO_TOGGLED";

export const add = (payload) => ({
    type: ADD_TODO,
    payload,
});
