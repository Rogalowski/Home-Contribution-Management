import React from "react";

const ExpenseList = ({ expenses = [] }) => (
    <ol>
        Title expense --- Price expense
        {expenses.map((expense) => (
            <li>
                {expense.title} --- {expense.price} zł{" "}
            </li>
        ))}
    </ol>
);

export default ExpenseList;
