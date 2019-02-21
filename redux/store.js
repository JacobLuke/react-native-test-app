// @flow
import { createStore, combineReducers } from "redux";
import todoReducer from "./reducers";

export default createStore(combineReducers({ todo: todoReducer }));
