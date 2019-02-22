// @flow
import React, { Fragment } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Header } from "react-native-elements";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import TodoListActionButtons from "../components/TodoListActionButtons";

const styles = StyleSheet.create({
  header: {
    color: "#ffffff",
    fontWeight: "bold"
  },
  content: {
    alignContent: "flex-start",
    flex: 1,
    width: "100%",
    height: "100%"
  }
});

function Home() {
  return (
    <View style={styles.content}>
      <TodoInput />
      <TodoList />
      <TodoListActionButtons />
    </View>
  );
}

Home.navigationOptions = ({ navigation }) => ({
  header: (
    <Header
      leftComponent={{
        icon: "menu",
        color: "#ffffff"
      }}
      centerComponent={{ text: "TODO App", style: styles.header }}
      rightComponent={{
        icon: "check",
        color: "#00ff00",
        onPress: () => navigation.navigate("Completed")
      }}
    />
  )
});

export default Home;
