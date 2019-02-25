// @flow

import type { $ActionType } from "../ActionType";

import ActionType from "../ActionType";

type State = {
  name?: string
};

export default function(
  state: State = {},
  action: { type: $ActionType } & Object
): State {
  switch (action.type) {
    case ActionType.SET_USER_NAME:
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
}
