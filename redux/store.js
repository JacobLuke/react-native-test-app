// @flow
import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import todoReducer from "./reducers";
import {
  reducer as navReducer,
  middleware as navMiddleware
} from "../Navigation";

export default createStore(
  combineReducers({ todo: todoReducer, nav: navReducer }),
  applyMiddleware(thunk, navMiddleware)
);
