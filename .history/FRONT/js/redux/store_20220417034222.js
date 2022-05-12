import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import combineReducers from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const middleware = [logger, thunk];

export const store = createStore(
    combineReducers,
    composeWithDevTools(applyMiddleware(...middleware))
);
