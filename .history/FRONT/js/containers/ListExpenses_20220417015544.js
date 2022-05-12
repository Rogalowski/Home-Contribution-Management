import { connect } from "react-redux";
import { ListExpense } from "../components/ListExpense";
import { addExpenseToList } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
    return {
        save: (expense) => dispatch(addExpenseToList(expense)),
    };
};

export default connect(null, mapDispatchToProps)(ListExpense);
