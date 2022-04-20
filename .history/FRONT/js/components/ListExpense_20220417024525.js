import React from "react";

export const ListExpense = ({ expenseList }) => {
    console.log(expenseList);
    return (
        <>
            <ul>
                {expenseList.map((expense, idx) => (
                    <li key={idx}>{expense.expense}</li>
                ))}
                <button>Usuń</button>
                {/* onClick={() => removeProduct(product)} */}
            </ul>
        </>
    );
};
