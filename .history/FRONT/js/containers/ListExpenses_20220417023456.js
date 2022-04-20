import { connect } from "react-redux";
import { ListExpense } from "../components/ListExpense";
// import { addExpenseToList } from "../redux/actions";
import { useFilter } from "../redux/selectors";

const mapStateToProps = (state, ownProps) => {
    const customState = useFilter(getBasket(state), ownProps.match.params.filter)const customState = useFilter(getBasket(state), ownProps.match.params.filter)
    return {
        expenseList: state.list,
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addExpense: (expense) => dispatch(addExpenseToList(expense)),
//     };
// };

export default connect(mapStateToProps, null)(ListExpense);
