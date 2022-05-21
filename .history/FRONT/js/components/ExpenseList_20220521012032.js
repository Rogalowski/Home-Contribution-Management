import React, { useState, useCallback } from "react";
import ExpenseEdit from "./ExpenseEdit";

// const onClickRemove = () => onExpenseRemove(expense);

const ExpenseList = ({
    onExpenseEdit,
    onExpenseRemove,
    users,
    expenses = [],
}) => {
    const [currentHidden, setCurrentHidden] = useState([expenses.length]);

    let newArray = expenses.length;

    let a = Array.from(Array(newArray), () => 0);
    console.log("Array: " + a);
    // const [currentHidden, setCurrentHidden] = useState([
    //     expenses.map((expense, index) => ({
    //         expense: expense.hidden,
    //     })),
    // ]);
    // const fillHiddenArray = (expenses) => {
    //     let array = [];
    //     for (let i = 1; i <= expenses.length; i++) {
    //         array.push(true);
    //         console.log(i);
    //     }
    //     return array;
    // };
    console.log("ASD " + currentHidden);
    // console.log(fillHiddenArray(expenses));
    // console.log(currentHidden);
    // setCurrentHidden(fillHiddenArray(expenses));

    const handleToggleTask = ({ e, expense, index }) => {
        // setCurrentHidden((prev) => [...prev, expense.hidden]);

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
