// @flow

import { Alert, AsyncStorage } from "react-native";
import ActionType from "../ActionType";

const STORAGE_KEYS = Object.freeze({
  NAME: "@global:user:name"
});

export function updateUsername(name: string) {
  return (dispatch: Function) =>
    AsyncStorage.setItem(STORAGE_KEYS.NAME, name)
      .then(value => {
        dispatch({
          type: ActionType.SET_USER_NAME,
          name
        });
      })
      .catch(err => Alert.alert("Error", "Something went wrong"));
}

export function loadProfileFromStorage() {
  return (dispatch: Function) =>
    AsyncStorage.multiGet(Object.values(STORAGE_KEYS)).then(
      (values: Array<[$Values<typeof STORAGE_KEYS>, string]>) => {
        values.forEach(([key, val]) => {
          switch (key) {
            case STORAGE_KEYS.NAME:
              dispatch({
                type: ActionType.SET_USER_NAME,
                name: val
              });
          }
        });
      }
    );
}
