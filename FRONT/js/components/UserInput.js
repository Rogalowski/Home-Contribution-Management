import React, { Component, useState } from "react";

const UserInput = ({ onUserAdd, onUserRemove, onSelectChange, users }) => {
    const [name, setName] = useState("");
    const [selector, setSelector] = useState(" ");

    return (
        <div>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Type name here"
            />
            <button
                onClick={() => {
                    onUserAdd({ user: name });
                    setName("");
                }}
            >
                ADD USER
            </button>

            <select
                value={selector}
                onChange={(e) => setSelector(e.target.value)}
            >
                {/* {Object.keys(users).map((user) => (
                    <option key={user}>{user}</option>
                ))} */}
                <option>Choose user</option>
                {users.map((user) => (
                    <option key={user.user}> {user.user}</option>
                ))}
            </select>

            <button
                // onClick={() => this.props.onUserRemove(this.state.user)}
                onClick={() =>
                    onUserRemove({
                        user: selector,
                    })
                }
                // onClick={this.onClickRemove(this.state)}
            >
                REMOVE USER
            </button>
        </div>
    );
};
// class UserInputs extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: "",
//         };

//         this.onSelectChange = this.onSelectChange.bind(this);
//         this.onClickRemove = this.onClickRemove.bind(this);
//     }

//     onSelectChange(event) {
//         this.setState({ userId: event.target.value });
//     }
//     onClickRemove(event) {
//         this.props.onUserRemove({ userId: event.target.value });
//     }

//     render() {
//         return (
//             <div>
//                 <input
//                     value={this.state.value}
//                     onChange={(e) => this.setState({ value: e.target.value })}
//                     type="text"
//                 />
//                 <button
//                     onClick={() => {
//                         this.props.onUserAdd(this.state.value);
//                         this.setState({
//                             value: "",
//                         });
//                     }}
//                 >
//                     ADD USER
//                 </button>

//                 <select
//                     value={this.state.userId}
//                     onChange={this.onSelectChange}
//                 >
//                     {Object.keys(this.props.users).map((user) => (
//                         <option key={user}>{user}</option>
//                     ))}
//                 </select>

//                 <button
//                     // onClick={() => this.props.onUserRemove(this.state.user)}
//                     onClick={this.onClickRemove}
//                     // onClick={this.onClickRemove(this.state)}
//                 >
//                     REMOVE USER
//                 </button>
//             </div>
//         );
//     }
// }

export default UserInput;
