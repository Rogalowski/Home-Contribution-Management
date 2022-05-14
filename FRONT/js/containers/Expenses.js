import Expenses from "../components/Expenses";
import { connect } from "react-redux";
import { addExpense } from "../redux/actions";
import { removeExpense } from "../redux/actions";

const mapStateToProps = ({ users, expenses }) => ({
    users,
    expenses,
});

const mapDispatchToProps = (dispatch) => ({
    onAddExp: (expense) => dispatch(addExpense(expense)),
    onRemoveExp: (expense) => dispatch(removeExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
