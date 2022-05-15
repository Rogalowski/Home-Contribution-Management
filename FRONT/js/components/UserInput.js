import React, { Component } from "react";

class UserInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };

        this.onSelectChange = this.onSelectChange.bind(this);
        this.onClickRemove = this.onClickRemove.bind(this);
    }

    onSelectChange(event) {
        this.setState({ userId: event.target.value });
    }
    onClickRemove(event) {
        this.props.onUserRemove({ userId: event.target.value });
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.value}
                    onChange={(e) => this.setState({ value: e.target.value })}
                    type="text"
                />
                <button
                    onClick={() => {
                        this.props.onUserAdd(this.state.value);
                        this.setState({
                            value: "",
                        });
                    }}
                >
                    ADD USER
                </button>

                <select
                    value={this.state.userId}
                    onChange={this.onSelectChange}
                >
                    {Object.keys(this.props.users).map((user) => (
                        <option key={user}>{user}</option>
                    ))}
                </select>

                <button
                    // onClick={() => this.props.onUserRemove(this.state.user)}
                    onClick={this.onClickRemove}
                    // onClick={this.onClickRemove(this.state)}
                >
                    REMOVE USER
                </button>
            </div>
        );
    }
}

export default UserInput;
