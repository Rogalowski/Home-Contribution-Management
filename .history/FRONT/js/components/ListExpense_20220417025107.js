import React from "react";

export const ListExpense = ({ state }) => {
    console.log(state.expense);
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
