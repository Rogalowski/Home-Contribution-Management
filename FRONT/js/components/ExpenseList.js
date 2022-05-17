import React, { useState } from "react";
import ExpenseEdit from "./ExpenseEdit";

// const onClickRemove = () => onExpenseRemove(expense);

const ExpenseList = ({
    onExpenseEdit,
    onExpenseRemove,
    users,
    expenses = [],
}) => {
    const [hidden, setHidden] = useState(true);

    const handler = (index) => (event) => {
        console.log(event.target.id);
        // setHidden(!hidden);
    };

    return (
        <ol>
            <b>ID. WHEN? --- WHAT? --- HOW MUCH? --- WHO?</b>
            {expenses.map((expense, index) => (
                <li key={expense.id}>
                    {expense.date} --- {expense.title} --- {expense.price} zł
                    --- {expense.userId}
                    <button id={index} onClick={handler(index)}>
                        {handler ? "EDIT" : "CANCEL"}
                    </button>
                    {/* <button id={index} onClick={handler(index)}>
                        {handler ? "EDIT" : "CANCEL"}
                    </button> */}
                    {/* <button id={index} onClick={(e) => e.target.id}>
                        { ? "EDIT" : "CANCEL"}
                    </button> */}
                    <div id={index} hidden={hidden}>
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
