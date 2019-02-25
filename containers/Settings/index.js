// @flow

import React from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { createBottomTabNavigator } from "react-navigation";
import ProfileSettings from "./Profile";

export default createBottomTabNavigator({
  Profile: {
    screen: ProfileSettings,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="account-circle" color={tintColor} />
      )
    }
  }
});
