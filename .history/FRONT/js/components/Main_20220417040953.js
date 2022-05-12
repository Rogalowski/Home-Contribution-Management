// import React from "react";
// import { HashRouter, NavLink, Route, Switch } from "react-router-dom";
// import { NotFound } from "./NotFound";
// import store from "../redux/store";
// import { Provider } from "react-redux";
// import { ListExpense } from "./ListExpense";

// const Main = () => (
//     <Provider store={store}>
//         <HashRouter>
//             <NavLink exact to="/">
//                 Home Link
//             </NavLink>

//             <Switch>
//                 <Route exact path={"/"} component={ListExpense} />
//                 <Route component={NotFound} />
//             </Switch>
//         </HashRouter>

//         <ListExpense />
//     </Provider>
// );

// export default Main;

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "../redux/store";
import Cart from "./containers/Cart";
import { Route, HashRouter as Router, Switch, Link } from "react-router-dom";

const Main = () => (
    <div>
        <Provider store={store}>
            <Router>
                <ul>
                    <li>
                        <Link to={"/"}>wszystkie</Link>
                    </li>
                    <li>
                        <Link to={"/10"}>do 10 zł</Link>
                    </li>
                    <li>
                        <Link to={"/50"}>do 50 zł</Link>
                    </li>
                    <li>
                        <Link to={"/75"}>do 75 zł</Link>
                    </li>
                </ul>
                <Switch>
                    <Route component={Cart} path={"/:filter?"} />
                </Switch>
            </Router>
        </Provider>
    </div>
);
export default Main;
