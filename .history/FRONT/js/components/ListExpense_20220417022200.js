import React from "react";

export const ListExpense = ({ expenseList }) => {
    return (
        <>
            <ul>
                {expenseList.map((expense, idx) => (
                    <li key={idx}>{expense}</li>
                ))}
            </ul>
        </>
    );
};
