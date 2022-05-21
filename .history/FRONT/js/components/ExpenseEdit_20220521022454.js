import React, { useState } from "react";

const ExpenseEdit = ({ users, onExpenseEdit, expense }) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [userId, setUser] = useState("");

    return (
        <div>
            title:
            <input
                placeholder="Type name of bought product"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            price:
            <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Type numeric 0-9.0-9"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <select value={userId} onChange={(e) => setUser(e.target.value)}>
                {/* {Object.keys(users).map((user) => (
                    <option key={user}>{user}</option>
                ))} */}
                <option>Choose user</option>
                {users.map((user) => (
                    <option key={user.user}>{user.user}</option>
                ))}
            </select>
            <button
                onClick={() => {
                    onExpenseEdit({
                        title: title,
                        price: price,
                        userId: userId,
                    });
                    setTitle("");
                    setPrice();
                    setUser(" ");
                }}
            >
                SAVE
            </button>
        </div>
    );
};

export default ExpenseEdit;

// class ExpenseInputd extends Component {
//     static defaultProps = {
//         onExpenseAdd: () => {},
//     };

//     constructor(props) {
//         super(props);
//         this.state = {
//             userId: "someone", // will select peron on refresh site
//         };

//         this.onTitleChange = this.onTitleChange.bind(this);
//         this.onPriceChange = this.onPriceChange.bind(this);
//         this.onSelectChange = this.onSelectChange.bind(this);
//         this.onClickAdd = this.onClickAdd.bind(this);
//     }

//     onTitleChange(event) {
//         this.setState({ title: event.target.value });
//     }

//     onPriceChange(event) {
//         this.setState({ price: event.target.value });
//     }

//     onSelectChange(event) {
//         this.setState({ userId: event.target.value });
//     }

//     onClickAdd() {
//         this.props.onExpenseAdd(this.state);
//     }

//     render() {
//         return (
//             <div>
//                 title:
//                 <input
//                     placeholder="Type name of bought product"
//                     value={this.state.title}
//                     onChange={this.onTitleChange}
//                 />
//                 price:
//                 <input
//                     type="text"
//                     inputMode="numeric"
//                     pattern="[0-9]*"
//                     placeholder="Type numeric 0-9.0-9"
//                     value={this.state.price}
//                     onChange={this.onPriceChange}
//                 />
//                 <select
//                     value={this.state.userId}
//                     onChange={this.onSelectChange}
//                 >
//                     {Object.keys(this.props.users).map((user) => (
//                         <option key={user}>{user}</option>
//                     ))}
//                 </select>
//                 <button onClick={this.onClickAdd}>ADD EXPENSE</button>
//             </div>
//         );
//     }
// }
