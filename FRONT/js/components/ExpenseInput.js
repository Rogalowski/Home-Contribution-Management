import React, { Component } from "react";

class ExpenseInput extends Component {
    static defaultProps = {
        onExpenseAdd: () => {},
    };

    constructor(props) {
        super(props);
        this.state = {
            userId: "jacek",
            title: "",
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onInputChange(event) {
        this.setState({ title: event.target.value });
    }

    onSelectChange(event) {
        this.setState({ userId: event.target.value });
    }

    onClick() {
        this.props.onExpenseAdd(this.state);
    }

    render() {
        return (
            <div>
                <input value={this.state.title} onChange={this.onInputChange} />
                <select
                    value={this.state.userId}
                    onChange={this.onSelectChange}
                >
                    {Object.keys(this.props.users).map((user) => (
                        <option key={user}>{user}</option>
                    ))}
                </select>
                <button onClick={this.onClick}>ADD EXPENSE</button>
            </div>
        );
    }
}

export default ExpenseInput;
