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

    let hiddenArray = Array.from(Array(expenses.length), () => false);
    console.log("Array: " + hiddenArray);
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
        console.log("a index: " + index + " " + hiddenArray[index]);
        let selected = e.target.id;

        let arrayHiddenCopy = [
            ...hiddenArray.slice(0, index),
            !hiddenArray[index],
            ...hiddenArray.slice(index + 1),
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
                        onClick={(e) =>
                            handleToggleTask({ e, hiddenArray, expense, index })
                        }
                    >
                        {currentHidden[index] ? "↓" : "EDIT"}
                    </button>
                    <div key={index} hidden={!currentHidden[index]}>
                        <ExpenseEdit
                            users={users}
                            expense={expense}
                            onExpenseEdit={onExpenseEdit}
                        />
                    </div>
                    <button onClick={() => onExpenseRemove(expense)}>
                        REMOVE
                    </button>
                </li>
            ))}
        </ol>
    );
};

export default ExpenseList;
