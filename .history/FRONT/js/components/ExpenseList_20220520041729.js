import React, { useState, useCallback } from "react";
import ExpenseEdit from "./ExpenseEdit";

// const onClickRemove = () => onExpenseRemove(expense);

const ExpenseList = ({
    onExpenseEdit,
    onExpenseRemove,
    users,
    expenses = [],
}) => {
    const [currentHidden, setCurrentHidden] = useState();

    const handleToggleTask = ({ e, expense, index }) => {
        let selected = e.target.id;
        setHidden((prev) => [...prev, expense.hidden]);
        let arrayHiddenCopy = [
            ...hidden.slice(0, index),
            !currentHidden[index],
            ...hidden.slice(index + 1),
        ];
        setHidden(arrayHiddenCopy);

        console.log("Array:  ", hidden);
        console.log("selected:  ", selected);
        console.log("Kliknałem task: ", { index });
        console.log("Kliknałem również na task id: ", hidden);
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
                        {currentHidden[index] ? "EDIT " : "CANCEL"}
                    </button>
                    {/* <button id={index} onClick={handler(index)}>
                        {handler ? "EDIT" : "CANCEL"}
                    </button> */}
                    {/* <button id={index} onClick={(e) => e.target.id}>
                        { ? "EDIT" : "CANCEL"}
                    </button> */}
                    <div key={index} hidden={currentHidden[index]}>
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
