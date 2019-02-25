// @flow
import React from "react";
import { createStackNavigator } from "react-navigation";
import Header from "./Header";
import MainScreen from "./Main";
import CompletedScreen from "./Completed";

export default createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: ({ navigation }) => ({
      header: (
        <Header
          rightComponent={{
            icon: "check",
            color: "#00ff00",
            onPress: () => navigation.navigate("Completed")
          }}
          title="Todo App"
          navigation={navigation}
        />
      )
    })
  },
  Completed: {
    screen: CompletedScreen
  }
});
