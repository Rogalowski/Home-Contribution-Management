import React from "react";

// const onClickRemove = () => onExpenseRemove(expense);

const ExpenseList = ({ onExpenseRemove, expenses = [] }) => (
    <ol>
        <b>ID. WHEN? --- WHAT? --- HOW MUCH? --- WHO?</b>
        {expenses.map((expense, index) => (
            <li key={expense.id}>
                {expense.date} --- {expense.title} --- {expense.price} zł ---{" "}
                {expense.userId}{" "}
                <button onClick={() => onExpenseRemove(expense)}>
                    REMOVE EXPENSE
                </button>
            </li>
        ))}
    </ol>
);

export default ExpenseList;
