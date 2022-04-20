import Expenses from "../components/Expenses";
import { connect } from "react-redux";
import { addExpense} from "../redux/actions";

const mapStateToProps = ({ users, expenses }) => ({
    users,
    expenses,
});

const mapDispatchToProps = (dispatch) => ({
    onAdd: (expense) => dispatch(addExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
