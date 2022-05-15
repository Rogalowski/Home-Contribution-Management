import React, { Component, useState } from "react";

const UserInput = ({ onUserAdd, onUserRemove, onSelectChange, users }) => {
    const [name, setName] = useState("");
    const [selector, setSelector] = useState("someone");

    function onSelectChange(event) {
        setSelector(event.target.value);
    }

    return (
        <div>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
            />
            <button
                onClick={() => {
                    onUserAdd(name);
                    setName("");
                }}
            >
                ADD USER
            </button>

            <select value={selector} onChange={onSelectChange}>
                {Object.keys(users).map((user) => (
                    <option key={user}>{user}</option>
                ))}
            </select>

            <button
                // onClick={() => this.props.onUserRemove(this.state.user)}
                onClick={onUserRemove}
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
