// @flow

import React, { Component } from "react";
import { FlatList, ScrollView } from "react-native";
import { connect } from "react-redux";
import { ListItem } from "react-native-elements";
import { removeTodoItem, toggleTodoItem } from "../redux/actions/todo";

const IndexKey = (item: any, index: number) => index.toString();

type Props = {
  items: Array<{ value: string, completed: boolean }>,
  removeItem: (index: number) => void,
  toggleCompleted: (index: number) => void,
  show?: "completed" | "incomplete"
};

class TodoList extends Component<Props> {
  renderItem = (item: {
    item: { value: string, completed: boolean, index: number }
  }) => {
    return (
      <ListItem
        title={item.item.value}
        checkBox={{
          checked: item.item.completed,
          onPress: () => this.props.toggleCompleted(item.item.index)
        }}
        rightIcon={{
          name: "delete-forever",
          color: "#ff0000",
          onPress: () => this.props.removeItem(item.item.index)
        }}
      />
    );
  };
  render() {
    const { items, show } = this.props;
    return (
      <ScrollView>
        <FlatList
          keyExtractor={IndexKey}
          data={items
            .map((item, index) => ({ ...item, index }))
            .filter(
              item =>
                (item.completed && show !== "incomplete") ||
                (!item.completed && show !== "completed")
            )}
          renderItem={this.renderItem}
        />
      </ScrollView>
    );
  }
}

export default (connect(
  (state, { onlyCompleted }) => {
    let show;
    if (onlyCompleted) {
      show = "completed";
    } else if (state.todo.isCompletedHidden) {
      show = "incomplete";
    }
    return { items: state.todo.items, show };
  },
  dispatch => ({
    removeItem: (index: number) => dispatch(removeTodoItem(index)),
    toggleCompleted: (index: number) => dispatch(toggleTodoItem(index))
  })
)(TodoList): React$ComponentType<{ onlyCompleted?: boolean }>);
