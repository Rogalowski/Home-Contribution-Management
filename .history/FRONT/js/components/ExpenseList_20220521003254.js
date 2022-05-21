import React, { useState, useCallback } from "react";
import ExpenseEdit from "./ExpenseEdit";

// const onClickRemove = () => onExpenseRemove(expense);

const ExpenseList = ({
    onExpenseEdit,
    onExpenseRemove,
    users,
    expenses = [],
}) => {
    const [currentHidden, setCurrentHidden] = useState([]);

    const handleToggleTask = ({ e, expense, index }) => {
        setCurrentHidden((prev) => [...prev, expense.hidden]);

        let selected = e.target.id;

        let arrayHiddenCopy = [
            ...currentHidden.slice(0, index),
            !currentHidden[index],
            ...currentHidden.slice(index + 1),
        ];
        setCurrentHidden(arrayHiddenCopy);

        console.log("Array:  ", currentHidden);
        console.log("selected:  ", selected);
        console.log("Kliknałem task: ", { index });
        console.log("Kliknałem również na task id: ", currentHidden);
    };

    return (
        <ol>
            <b>ID. WHEN? --- WHAT? --- HOW MUCH? --- WHO?</b>
            {expenses.map((expense, index) => (
                <li key={expense.id}>
                    {expense.date} --- {expense.title} --- {expense.price} zł
                    --- {expense.userId}
                    <button
                        id={index}
                        onClick={(e) => handleToggleTask({ e, expense, index })}
                    >
                        {expense.hidden ? "EDIT " : "CANCEL"}
                    </button>
                    {/* <button id={index} onClick={handler(index)}>
                        {handler ? "EDIT" : "CANCEL"}
                    </button> */}
                    {/* <button id={index} onClick={(e) => e.target.id}>
                        { ? "EDIT" : "CANCEL"}
                    </button> */}
                    <div key={index} hidden={expense.hidden}>
                        <ExpenseEdit
                            users={users}
                            onExpenseEdit={onExpenseEdit}
                        />
                    </div>
                    <button onClick={() => onExpenseRemove(expense)}>
                        REMOVE EXPENSE
                    </button>
                </li>
            ))}
        </ol>
    );
};

export default ExpenseList;
