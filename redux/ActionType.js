// @flow

import keymirror from "keymirror";

const ActionType = Object.freeze({
  ADD_TODO_ITEM: null,
  REMOVE_TODO_ITEM: null,
  TOGGLE_TODO_ITEM_COMPLETE: null,
  REMOVE_COMPLETED_TODO_ITEMS: null
});

export default (keymirror(ActionType): {
  [T: $Keys<typeof ActionType>]: $Keys<typeof ActionType>
});

export type $ActionType = $Keys<typeof ActionType>;
