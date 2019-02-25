// @flow

import React from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import ProfileSettings from "./Profile";
import Header from "../../components/Header";

export default createStackNavigator({
  Settings: {
    screen: createBottomTabNavigator({
      Profile: {
        screen: ProfileSettings,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="account-circle" color={tintColor} />
          )
        }
      }
    }),
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Application Settings" navigation={navigation} />
    })
  }
});
