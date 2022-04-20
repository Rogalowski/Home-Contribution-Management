import React from "react";

export const ListExpense = ({ expenseList }) => {
    return (
        <>
            <ul>
                {expenseList.map((time, i) => (
                    <li key={i}>{time}</li>
                ))}
            </ul>
            <button onClick={() => addExpense(expense)}> Add expense </button>
        </>
    );
};
