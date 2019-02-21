// @flow

import React, { Component } from "react";
import { Alert, FlatList, ScrollView } from "react-native";
import { connect } from "react-redux";
import { ListItem } from "react-native-elements";
import { removeTodoItem, toggleTodoItem } from "../redux/actions";

const IndexKey = (item: any, index: number) => index.toString();

type Props = {
  items: Array<{ value: string, completed: boolean }>,
  removeItem: (index: number) => void,
  toggleCompleted: (index: number) => void
};

class TodoList extends Component<Props> {
  renderItem = (item: {
    item: { value: string, completed: boolean },
    index: number
  }) => {
    return (
      <ListItem
        title={item.item.value}
        checkBox={{
          checked: item.item.completed,
          onPress: () => this.props.toggleCompleted(item.index)
        }}
        rightIcon={{
          name: "delete-forever",
          color: "#ff0000",
          onPress: () => this.props.removeItem(item.index)
        }}
      />
    );
  };
  render() {
    return (
      <ScrollView>
        <FlatList
          keyExtractor={IndexKey}
          data={this.props.items}
          renderItem={this.renderItem}
        />
      </ScrollView>
    );
  }
}

export default connect(
  state => ({
    items: state.todo.items
  }),
  dispatch => ({
    removeItem: (index: number) => dispatch(removeTodoItem(index)),
    toggleCompleted: (index: number) => dispatch(toggleTodoItem(index))
  })
)(TodoList);
