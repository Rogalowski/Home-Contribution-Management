import React from "react";
import PropTypes from "prop-types";

export const ListExpense = ({ expenseListReducer }) => {
    console.log(expenseListReducer);
    return (
        <>
            <ul>dsfsdf</ul>
        </>
    );
};

ListExpense.propTypes = {
    expenseList: PropTypes.array.isRequired,
};
