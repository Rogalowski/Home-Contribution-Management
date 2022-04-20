import React from "react";

export const ListExpense = ({ expenseList }) => {
    return (
        <>
            <ul>
                {timeList.map((time, i) => (
                    <li key={i}>{time}</li>
                ))}
            </ul>
            <button onClick={() => save(expense)}> Add expense </button>
        </>
    );
};
