import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import CurrentTime from "./components/CurrentTime";
import UserInput from "./containers/UserInput";
import Expenses from "./containers/Expenses";

const currentDate = new Date();

const App = () => (
    <div>
        <h1 style={{ textAlign: "center" }}>Home Contribution Management</h1>

        <Provider store={store}>
            <CurrentTime />
            <UserInput />

            <Expenses />
        </Provider>
    </div>
);

// https://codesandbox.io/embed/distracted-burnell-3wrz7r?fontsize=14&hidenavigation=1&theme=dark
// WYJASNIENEI
ReactDOM.render(<App />, document.getElementById("root"));
