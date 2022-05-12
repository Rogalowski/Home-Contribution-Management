import React from "react";
import ExpenseInput from "./ExpenseInput";
import UsersList from "./UsersList";
import ExpenseList from "./ExpenseList";

const Expenses = ({ onAdd, users, expenses }) => (
    <div>
        <ExpenseInput users={users} onExpenseAdd={onAdd} />
        <UsersList users={users} />
        <ExpenseList expenses={expenses} />
    </div>
);

export default Expenses;
