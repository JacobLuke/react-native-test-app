// @flow
import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import todoReducer from "./reducers/todo";

export default createStore(
  combineReducers({ todo: todoReducer }),
  applyMiddleware(thunk)
);
