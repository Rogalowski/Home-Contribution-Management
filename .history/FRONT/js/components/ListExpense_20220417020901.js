import React from "react";

export const ListExpense = ({ expenseList, addExpense }) => {
    return (
        <>
            <ul>
                {expenseList.map((expense, idx) => (
                    <li key={idx}>{expense}</li>
                ))}
            </ul>
            <button onClick={() => addExpense(expense)}> Add expense </button>
        </>
    );
};
