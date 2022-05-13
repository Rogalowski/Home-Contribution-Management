import React, { Component } from "react";

class UserInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };
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
            </div>
        );
    }
}

export default UserInput;
