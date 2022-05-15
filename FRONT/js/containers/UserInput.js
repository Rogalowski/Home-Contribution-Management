import UserInput from "../components/UserInput";
import { connect } from "react-redux";
import { addUser, removeUser } from "../redux/actions";

const mapStateToProps = ({ users }) => ({
    users,
});
const mapDispatchToProps = (dispatch) => ({
    onUserAdd: (value) => dispatch(addUser(value)),
    onUserRemove: (user) => dispatch(removeUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInput);
