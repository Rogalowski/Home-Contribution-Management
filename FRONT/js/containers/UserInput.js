import UserInput from "../components/UserInput";
import {connect} from "react-redux";
import { addUser } from "../redux/actions";

const mapDispatchToProps = dispatch => ({
    onUserAdd: value => dispatch(addUser(value))
})

export default connect(null, mapDispatchToProps)(UserInput);
