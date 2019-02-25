// @flow
import React, { Fragment } from "react";
import { View, StyleSheet, Text } from "react-native";
import TodoInput from "../../components/TodoInput";
import TodoList from "../../components/TodoList";
import TodoListActionButtons from "../../components/TodoListActionButtons";

const styles = StyleSheet.create({
  content: {
    alignContent: "flex-start",
    flex: 1,
    width: "100%",
    height: "100%"
  }
});

function Main() {
  return (
    <View style={styles.content}>
      <TodoInput />
      <TodoList />
      <TodoListActionButtons />
    </View>
  );
}

export default Main;
