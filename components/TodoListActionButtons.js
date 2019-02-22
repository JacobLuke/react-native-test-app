// @flow

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import PushNotification from "react-native-push-notification";
import { connect } from "react-redux";
import { toggleHideCompletedItems } from "../redux/actions";

function HideCompletedItemsButton(props: {
  removeItems: () => void,
  isCompletedHidden: boolean,
  disabled: boolean
}) {
  return (
    <Button
      type="clear"
      onPress={props.removeItems}
      title={props.isCompletedHidden ? "Show Completed" : "Hide Completed"}
      titleStyle={styles.removeText}
      disabled={props.disabled}
    />
  );
}

const HideButton = connect(
  state => ({
    isCompletedHidden: state.todo.isCompletedHidden,
    disabled: !state.todo.items.length
  }),
  dispatch => ({
    removeItems: () => dispatch(toggleHideCompletedItems())
  })
)(HideCompletedItemsButton);

function SendLocalNotificationButton(props: { numIncompleteItems: number }) {
  return (
    <Button
      onPress={() =>
        PushNotification.localNotification({
          title: "TODO App",
          message: `${props.numIncompleteItems} item${
            props.numIncompleteItems === 1 ? "" : "s"
          } remaining`,
          number: props.numIncompleteItems,
          vibration: 300
        })
      }
      title="Notify"
      disabled={!props.numIncompleteItems}
    />
  );
}

const NotificationButton = connect(state => ({
  numIncompleteItems: state.todo.items.filter(item => !item.completed).length
}))(SendLocalNotificationButton);

const styles = StyleSheet.create({
  removeText: {
    color: "#ff0000",
    textAlign: "center"
  },
  container: {
    flex: 1,
    flexDirection: "row",
    marginBottom: "100%",
    justifyContent: "center",
    alignItems: "stretch",
    minHeight: 50
  }
});

export default () => (
  <View>
    <HideButton />
    <NotificationButton />
  </View>
);
