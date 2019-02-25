// @flow

import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Input } from "react-native-elements";
import { connect } from "react-redux";

const styles = StyleSheet.create({});

type Props = {};

const eventToText = (func: string => void) => (event: {
  nativeEvent: { text: string }
}) => func(event.nativeEvent.text);

class ProfileSettings extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>TODO</Text>
      </View>
    );
  }
}

export default connect()(ProfileSettings);
