import React, { useState, useCallback } from "react";
import ExpenseEdit from "./ExpenseEdit";

// const onClickRemove = () => onExpenseRemove(expense);

const ExpenseList = ({
    onExpenseEdit,
    onExpenseRemove,
    users,
    expenses = [],
}) => {
    const [hidden, setHidden] = useState([{ hidden: true }]);

    const handleToggleTask = ({ e, expense, index }) => {
        const arrayHiddenCopy = [
            ...hidden.slice(0, index),
            { hidden: !hidden.hidden },
            ...hidden.slice(index + 1),
        ];
        setHidden(arrayHiddenCopy);

        // console.log("PO:  ", doList);
        // console.log("Kliknałem task: ", { index });
        // console.log("Kliknałem również na task id: ", el.id);
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
                        {/* {handler ? "EDIT " : "CANCEL"} */}
                        EDIT
                    </button>
                    {/* <button id={index} onClick={handler(index)}>
                        {handler ? "EDIT" : "CANCEL"}
                    </button> */}
                    {/* <button id={index} onClick={(e) => e.target.id}>
                        { ? "EDIT" : "CANCEL"}
                    </button> */}
                    <div key={index} hidden={hidden[index]}>
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
