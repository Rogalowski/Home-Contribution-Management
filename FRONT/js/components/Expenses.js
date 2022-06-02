import React, { useState } from "react";
import ExpenseInput from "./ExpenseInput";
import UsersList from "./UsersList";
import ExpenseList from "./ExpenseList";
import ExpenseEdit from "./ExpenseEdit";

const Expenses = ({ onAddExp, onEditExp, onRemoveExp, users, expenses }) => {
    function sumAll(users) {
        let sum = 0;

        for (let i = 0; i < users.length; i++) {
            sum += users[i].spent;
            console.log("Total SPent: " + users[i].spent);
        }
        return parseFloat(sum);
    }

    const currentDate = new Date();

    return (
        <div>
            <h5>Added Users with Summary: </h5>
            <UsersList users={users} />
            <p></p>
            <h1>Year: {currentDate.getFullYear()}</h1>
            <ExpenseList
                expenses={expenses}
                onExpenseRemove={onRemoveExp}
                onExpenseEdit={onEditExp}
                users={users}
            />
            <ExpenseInput users={users} onExpenseAdd={onAddExp} />

            <h3>TOTAL SPENT: {sumAll(users)} zł</h3>
        </div>
    );
};

export default Expenses;
