import React from "react";

const ExpenseList = ({ expenses = [] }) => (
    <ol>
        <b>ID. WHEN? --- WHAT? --- HOW MUCH? --- WHO?</b>
        {expenses.map((expense, index) => (
            <li key={index}>
                {expense.date} --- {expense.title} --- {expense.price} zł ---{" "}
                {expense.userId}
            </li>
        ))}
    </ol>
);

export default ExpenseList;
