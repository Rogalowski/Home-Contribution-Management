import React from "react";

export const ListExpense = ({ expenseList, addExpense }) => {
    return (
        <>
            <ul>
                {expenseList.map((expenseEntry, i) => (
                    <li key={i}>{expenseEntry}</li>
                ))}
            </ul>
            <button onClick={() => addExpense(expense)}> Add expense </button>
        </>
    );
};
