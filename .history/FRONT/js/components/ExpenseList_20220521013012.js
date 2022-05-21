import React, { useState, useCallback } from "react";
import ExpenseEdit from "./ExpenseEdit";

// const onClickRemove = () => onExpenseRemove(expense);

const ExpenseList = ({
    onExpenseEdit,
    onExpenseRemove,
    users,
    expenses = [],
}) => {
    // const [currentHidden, setCurrentHidden] = useState([expenses.length]);

    let newArray = expenses.length;

    let a = Array.from(Array(newArray), () => true);
    console.log("Array: " + a);
    // console.log("Array1: " + Object.values(a));
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
        console.log("a index: " + index + " " + a[index]);
        let selected = e.target.id;

        let arrayHiddenCopy = [
            ...a.slice(0, index),
            !a[index],
            ...a.slice(index + 1),
        ];
        // setCurrentHidden(arrayHiddenCopy);

        console.log("Array:  ", a);
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
                        onClick={(e) =>
                            handleToggleTask({ e, a, expense, index })
                        }
                    >
                        {a[index] ? "EDIT " : "CANCEL"}
                    </button>
                    {/* <button id={index} onClick={handler(index)}>
                        {handler ? "EDIT" : "CANCEL"}
                    </button> */}
                    {/* <button id={index} onClick={(e) => e.target.id}>
                        { ? "EDIT" : "CANCEL"}
                    </button> */}
                    <div key={index} hidden={a[index]}>
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
