// @flow

import type { ReadLens } from "../../modules/Lens";

import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Input } from "react-native-elements";
import { connect } from "react-redux";
import {
  loadProfileFromStorage,
  updateUsername
} from "../../redux/actions/profile";

const styles = StyleSheet.create({});

type Props = {
  profile: {
    name?: string
  },
  setUsername: string => void,
  loadProfile: () => void
};

type TextEvent = { nativeEvent: { text: string } };

const EventLens: ReadLens<TextEvent, string> = {
  get: (event: TextEvent) => event.nativeEvent.text
};

class ProfileSettings extends Component<Props> {
  componentDidMount() {
    this.props.loadProfile();
  }

  render() {
    const { profile, setUsername } = this.props;
    return (
      <View style={styles.container}>
        <Input
          defaultValue={profile.name}
          onSubmitEditing={setUsername}
          placeholder="Name"
        />
      </View>
    );
  }
}

export default connect(
  state => ({
    profile: state.profile
  }),
  dispatch => ({
    loadProfile: () => dispatch(loadProfileFromStorage()),
    setUsername: (event: TextEvent) =>
      dispatch(updateUsername(EventLens.get(event)))
  })
)(ProfileSettings);
