export { ADD_EXPENSE, ADD_USER, addExpense, addUser };

const ADD_EXPENSE = "ADD_EXPENSE";
const ADD_USER = "ADD_USER";

const addExpense = (payload) => ({
    type: ADD_EXPENSE,
    payload,
});

const addUser = (payload) => ({
    type: ADD_USER,
    payload,
});
