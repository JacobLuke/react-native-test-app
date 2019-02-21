// @flow

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import PushNotification from "react-native-push-notification";
import { connect } from "react-redux";
import { removeCompletedItems } from "../redux/actions";

function RemoveCompletedItemsButton(props: {
  removeItems: () => void,
  hasCompletedItems: boolean
}) {
  return (
    <Button
      type="clear"
      onPress={props.removeItems}
      title="Remove Completed"
      titleStyle={styles.removeText}
      disabled={!props.hasCompletedItems}
      buttonStyle={styles.removeButton}
    />
  );
}

const RemoveButton = connect(
  state => ({
    hasCompletedItems: state.todo.items.some(item => item.completed)
  }),
  dispatch => ({
    removeItems: () => dispatch(removeCompletedItems())
  })
)(RemoveCompletedItemsButton);

function SendLocalNotificationButton(props: { numIncompleteItems: boolean }) {
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
      buttonStyle={styles.notificationButton}
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
    <RemoveButton />
    <NotificationButton />
  </View>
);
