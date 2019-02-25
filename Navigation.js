// @flow

import { createDrawerNavigator } from "react-navigation";
import {
  createReduxContainer,
  createNavigationReducer,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import { connect } from "react-redux";
import Home from "./containers/Home";

export const AppNavigator = createDrawerNavigator({
  Home: {
    screen: Home
  }
});
export const middleware = createReactNavigationReduxMiddleware(
  state => state.nav
);
export const reducer = createNavigationReducer(AppNavigator);
const App = createReduxContainer(AppNavigator);
export const AppWithNavigation = connect(state => ({ state: state.nav }))(App);
