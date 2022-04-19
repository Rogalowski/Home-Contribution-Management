import React from "react";
import ExpenseInput from "./ExpenseInput";
import UsersList from "./UsersList";
import ExpenseList from "./ExpenseList";

const Expenses = ({onAdd, users, expenses}) => (
  <div>
    <ExpenseInput users={users} onArticleAdd={onAdd}/>
    <UsersList users={users}/>
    <ExpenseList articles={expenses}/>
  </div>
);

export default Expenses;
