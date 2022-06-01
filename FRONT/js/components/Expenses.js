import React, { useState } from "react";
import ExpenseInput from "./ExpenseInput";
import UsersList from "./UsersList";
import ExpenseList from "./ExpenseList";
import ExpenseEdit from "./ExpenseEdit";

const Expenses = ({ onAddExp, onEditExp, onRemoveExp, users, expenses }) => {
    const sumOfSpentTotal = users.reduce((previousValue, currentValue) => {
        if (previousValue.spent !== undefined) {
            return (
                parseFloat(previousValue.spent) + parseFloat(currentValue.spent)
            );
        } else {
            return sumOfSpentTotal;
        }
    });
    let sumOf = 0.0;
    const sumOfSpentTotal1 = users.forEach((element) => {
        console.log("element.spent: " + element.spent);
        sumOf += parseFloat(element.spent);
        console.log("SUN: " + sumOf);

        return sumOf;
    });
    const currentDate = new Date();
    console.log("sumOfSpentTotal: " + sumOfSpentTotal1);
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

            <h3>TOTAL SPENT: {sumOfSpentTotal1} zł</h3>
        </div>
    );
};

export default Expenses;
