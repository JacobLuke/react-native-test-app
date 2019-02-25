// @flow

import React from "react";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";
import { Header } from "react-native-elements";

type Props = {
  rightComponent?: Object,
  title: string,
  navigation: Object
};

const styles = StyleSheet.create({
  header: {
    color: "#ffffff",
    fontWeight: "bold"
  }
});

export default connect(state => state.nav)((props: Props) => (
  <Header
    leftComponent={{
      icon: "menu",
      color: "#ffffff",
      onPress: () => props.navigation.toggleDrawer()
    }}
    centerComponent={{ text: props.title, style: styles.header }}
    rightComponent={props.rightComponent}
  />
));
