import React from "react";
import ExpenseInput from "./ExpenseInput";
import UsersList from "./UsersList";
import ExpenseList from "./ExpenseList";

const Expenses = ({ onAddExp, onRemoveExp, users, expenses }) => (
    <div>
        <h5>Added Users with Summary: </h5>
        <UsersList users={users} />
        <p></p>
        <h2>JANUARY</h2>
        <ExpenseList expenses={expenses} onExpenseRemove={onRemoveExp} />
        <ExpenseInput users={users} onExpenseAdd={onAddExp} />
        <h3>SUMMARY</h3>
        <UsersList users={users} />
    </div>
);

export default Expenses;
