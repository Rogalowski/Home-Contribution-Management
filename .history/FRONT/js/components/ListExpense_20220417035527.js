import React from "react";
import PropTypes from "prop-types";

export const ListExpense = ({
    expenseListReducer = [
        {
            name: "jajka",
            price: 5,
        },
        {
            name: "owoce",
            price: 11,
        },
    ],
}) => {
    console.log(expenseListReducer);
    return (
        <>
            <ul>
                {expenseListReducer.map((expense, idx) => (
                    <li key={idx}>{expense.name}</li>
                ))}
                {/* <button>Usuń</button> */}
                {/* onClick={() => removeProduct(product)} */}
            </ul>
        </>
    );
};

ListExpense.propTypes = {
    expenseList: PropTypes.array.isRequired,
};
