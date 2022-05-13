import React from "react";
import ExpenseInput from "./ExpenseInput";
import UsersList from "./UsersList";
import ExpenseList from "./ExpenseList";

const Expenses = ({ onAdd, users, expenses }) => (
    <div>
        <b>Added Users: </b>
        <UsersList users={users} />
        <p></p>
        <h2>JANUARY</h2>
        <ExpenseList expenses={expenses} />
        <ExpenseInput users={users} onExpenseAdd={onAdd} />
    </div>
);

export default Expenses;
