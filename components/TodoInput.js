// @flow

import React, { Component } from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";
import { connect } from "react-redux";
import { addTodoItem } from "../redux/actions/todo";

type Props = { addTodoItem: string => void };
type State = { value: string };

class TodoInput extends Component<Props, State> {
  state: State = { value: "" };

  handleChangeValue = (value: string) => {
    this.setState({ value });
  };

  handleSubmit = () => {
    this.props.addTodoItem(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <Input
        placeholder="Enter an item"
        returnKeyType="go"
        onSubmitEditing={this.handleSubmit}
        value={this.state.value}
        onChangeText={this.handleChangeValue}
      />
    );
  }
}
export default (connect(
  null,
  (dispatch, props) => ({
    addTodoItem: (value: string) => dispatch(addTodoItem(value))
  })
)(TodoInput): React$ComponentType<{}>);
