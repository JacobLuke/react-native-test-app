// @flow

import React, { Component, Fragment } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Header } from "react-native-elements";
import { Provider } from "react-redux";
import store from "./redux/store";
import { AppWithNavigation } from "./Navigation";

// const instructions = Platform.select({
//   ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
//   android:
//     "Double tap R on your keyboard to reload,\n" +
//     "Shake or press menu button for dev menu"
// });

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.screen}>
          <View style={styles.content}>
            <AppWithNavigation />
          </View>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    color: "#ffffff",
    fontWeight: "bold"
  },
  screen: {
    width: "100%",
    height: "100%"
  },
  content: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
});
