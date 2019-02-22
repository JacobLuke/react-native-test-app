// @flow

import { createStackNavigator } from "react-navigation";
import {
  createReduxContainer,
  createNavigationReducer,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import { connect } from "react-redux";
import Completed from "./containers/Completed";
import Home from "./containers/Home";

export const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Completed: {
    screen: Completed
  }
});
export const middleware = createReactNavigationReduxMiddleware(
  state => state.nav
);
export const reducer = createNavigationReducer(AppNavigator);
const App = createReduxContainer(AppNavigator);
export const AppWithNavigation = connect(state => ({ state: state.nav }))(App);
