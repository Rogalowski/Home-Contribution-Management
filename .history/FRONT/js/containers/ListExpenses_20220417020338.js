import { connect } from "react-redux";
import { ListExpense } from "../components/ListExpense";
import { addExpenseToList } from "../redux/actions";

const mapStateToProps = (state) => {
    return {
        save: (expense) => dispatch(addExpenseToList(expense)),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        expenseList: state.ListExpense,
    };
};

export default connect(null, mapDispatchToProps)(ListExpense);
