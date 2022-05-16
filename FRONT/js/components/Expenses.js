import React from "react";
import ExpenseInput from "./ExpenseInput";
import UsersList from "./UsersList";
import ExpenseList from "./ExpenseList";
import ExpenseEdit from "./ExpenseEdit";

const Expenses = ({ onAddExp, onEditExp, onRemoveExp, users, expenses }) => (
    <div>
        <h5>Added Users with Summary: </h5>
        <UsersList users={users} />
        <p></p>
        <h2>JANUARY</h2>
        <ExpenseList
            expenses={expenses}
            onExpenseRemove={onRemoveExp}
            onExpenseEdit={onEditExp}
            users={users}
        />
        <ExpenseInput users={users} onExpenseAdd={onAddExp} />
        <h3>TOTAL SPENT</h3>
    </div>
);

export default Expenses;
