import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import UserInput from "./containers/UserInput";
import Expenses from "./containers/Expenses";

const App = () => (
    <div>
        <Provider store={store}>
            <UserInput />
            <Expenses />
        </Provider>
    </div>
);

// https://codesandbox.io/embed/distracted-burnell-3wrz7r?fontsize=14&hidenavigation=1&theme=dark
// WYJASNIENEI
ReactDOM.render(<App />, document.getElementById("root"));
