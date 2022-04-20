import React from "react";
import { HashRouter, NavLink, Route, Switch } from "react-router-dom";
import { NotFound } from "./NotFound";
import store from "../redux/store";
import { Provider } from "react-redux";

const Main = () => (
    <Provider store={store}>
        <HashRouter>
            <NavLink exact to="/">
                Main
            </NavLink>

            <Switch>
                <Route patch="*" component={NotFound} />
            </Switch>
        </HashRouter>
    </Provider>
);

export default Main;
