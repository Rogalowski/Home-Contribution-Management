import { createStore, applyMiddleware } from "redux";
// import combineReducers from "./reducers";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
const middlewares = [logger];
export default createStore(
    // combineReducers,
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
