import React from "react";
import PropTypes from "prop-types";

export const ListExpense = ({ expenseList }) => {
    console.log({ expenseList });
    return (
        <>
            {/* <ul>
                {expenseList.map((expense, idx) => (
                    <li key={idx}>{expense}</li>
                ))}
                <button>Usuń</button> */}
            {/* onClick={() => removeProduct(product)} */}
            {/* </ul> */}
        </>
    );
};

ListExpense.propTypes = {
    quotes: PropTypes.array.isRequired,
};
