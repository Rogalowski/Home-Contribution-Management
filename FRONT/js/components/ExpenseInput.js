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
            price: "",
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onPriceChange = this.onPriceChange.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    onPriceChange(event) {
        this.setState({ price: event.target.value });
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
                title:
                <input value={this.state.title} onChange={this.onTitleChange} />
                price:
                <input
                    type="text"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    value={this.state.price}
                    onChange={this.onPriceChange}
                />
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
