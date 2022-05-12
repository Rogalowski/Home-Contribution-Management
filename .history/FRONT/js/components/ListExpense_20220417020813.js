import React from "react";

export const ListExpense = ({ expenseList, addExpense }) => {
    return (
        <>
            <ul>
                {expenseList.map((expense, i) => (
                    <li key={i}>{expense}</li>
                ))}
            </ul>
            <button onClick={() => addExpense(expense)}> Add expense </button>
        </>
    );
};
