import React from "react";

const ExpenseList = ({expenses = []}) => (
  <ol>
    {expenses.map((title) => <li key={title}>{title}</li>)}
  </ol>
);

export default ExpenseList;
