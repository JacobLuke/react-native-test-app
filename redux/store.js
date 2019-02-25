// @flow
import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import todoReducer from "./reducers/todo";
import profileReducer from "./reducers/profile";

export default createStore(
  combineReducers({ todo: todoReducer, profile: profileReducer }),
  applyMiddleware(thunk)
);
