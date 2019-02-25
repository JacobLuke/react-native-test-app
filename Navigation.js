// @flow
import React from "react";
import { createDrawerNavigator } from "react-navigation";
import { Icon } from "react-native-elements";
import {
  createReduxContainer,
  createNavigationReducer,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import { connect } from "react-redux";
import Home from "./containers/Home";
import Settings from "./containers/Settings";

export const AppNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: "Home Page",
      drawerIcon: ({ tintColor }) => <Icon name="home" color={tintColor} />
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      drawerLabel: "App Settings",
      drawerIcon: ({ tintColor }) => <Icon name="settings" color={tintColor} />
    }
  }
});
export const middleware = createReactNavigationReduxMiddleware(
  state => state.nav
);
export const reducer = createNavigationReducer(AppNavigator);
const App = createReduxContainer(AppNavigator);
export const AppWithNavigation = connect(state => ({ state: state.nav }))(App);
