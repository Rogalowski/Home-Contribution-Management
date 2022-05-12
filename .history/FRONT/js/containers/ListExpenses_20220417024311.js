import { connect } from "react-redux";
import { ListExpense } from "../components/ListExpense";
// import { addExpenseToList } from "../redux/actions";
// import { useFilter } from "../redux/selectors";

const mapStateToProps = (state) => {
    // const customState = useFilter(ownProps.match.params.filter);
    return {
        // expenseList: state.expense,
        expenseList: state.expense,
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addExpense: (expense) => dispatch(addExpenseToList(expense)),
//     };
// };

export default connect(mapStateToProps, null)(ListExpense);
