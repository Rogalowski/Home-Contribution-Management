import React from "react";
import { connect } from "react-redux";
import { ListExpense } from "../components/ListExpense";
// import { addExpenseToList } from "../redux/actions";
// import { useFilter } from "../redux/selectors";

const mapStateToProps = ({ expenseListReducer }) => ({
    // const customState = useFilter(ownProps.match.params.filter);

    // expenseList: state.expense,
    expenseList: expenseListReducer,
    // expensePrice: expenseListReducer.price,
});

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addExpense: (expense) => dispatch(addExpenseToList(expense)),
//     };
// };

export default connect(mapStateToProps)(ListExpense);
