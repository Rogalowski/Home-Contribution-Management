import React from "react";

const ExpenseList = ({ expenses = [] }) => (
    <ol>
        <b>WHAT? --- HOW MUCH? --- WHO?</b>
        {expenses.map((expense) => (
            <li>
                {expense.title} --- {expense.price} zł --- {expense.userId}
            </li>
        ))}
    </ol>
);

export default ExpenseList;
