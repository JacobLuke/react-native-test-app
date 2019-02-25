// @flow
import React, { Component } from "react";
import { BackHandler } from "react-native";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import { Icon } from "react-native-elements";
import Home from "./containers/Home";
import Settings from "./containers/Settings";

export const AppNavigator = createAppContainer(
  createDrawerNavigator({
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
        drawerIcon: ({ tintColor }) => (
          <Icon name="settings" color={tintColor} />
        )
      }
    }
  })
);
