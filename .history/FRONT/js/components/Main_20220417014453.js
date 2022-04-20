import React from "react";
import { HashRouter, NavLink, Route, Switch } from "react-router-dom";
import { NotFound } from "./NotFound";
import store from "../redux/store";
import { Provider } from "react-redux";
import { ListExpense } from "./ListExpense";

const Main = () => (
    <Provider store={store}>
        <HashRouter>
            <NavLink exact to="/">
                Home Link
            </NavLink>

            <Switch>
                {/* <Route exact path={""} component={ListExpense} /> */}
                <Route component={NotFound} />
            </Switch>
        </HashRouter>
    </Provider>
);

export default Main;
