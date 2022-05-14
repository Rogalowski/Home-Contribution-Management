export {
    ADD_EXPENSE,
    ADD_USER,
    REMOVE_EXPENSE,
    REMOVE_USER,
    addExpense,
    addUser,
    removeUser,
    removeExpense,
};

const ADD_EXPENSE = "ADD_EXPENSE";
const ADD_USER = "ADD_USER";
const REMOVE_EXPENSE = "REMOVE_EXPENSE";
const REMOVE_USER = "REMOVE_USER";

const addExpense = (payload) => ({
    type: ADD_EXPENSE,
    payload,
});

const addUser = (payload) => ({
    type: ADD_USER,
    payload,
});
const removeExpense = (payload) => ({
    type: REMOVE_EXPENSE,
    payload,
});

const removeUser = (payload) => ({
    type: REMOVE_USER,
    payload,
});
