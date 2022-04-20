import { connect } from "react-redux";
import { ListExpense } from "../components/ListExpense";
import { addExpenseToList } from "../redux/actions";

const mapStateToProps = (state) => {
    return {
        expenseList: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addExpense: (expense) => dispatch(addExpenseToList(expense)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListExpense);
