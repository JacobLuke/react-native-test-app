// @flow
import { Alert } from "react-native";
import type { $ActionType } from "../ActionType";

import ActionType from "../ActionType";

type State = {
  items: Array<{
    value: string,
    completed: boolean
  }>
};

export default (
  state: State = { items: [] },
  action: { type: $ActionType }
): State => {
  switch (action.type) {
    case ActionType.ADD_TODO_ITEM: {
      return {
        items: [...state.items, { value: action.value, completed: false }]
      };
    }
    case ActionType.REMOVE_TODO_ITEM: {
      const items = [...state.items];
      items.splice(action.index, 1);
      return { items };
    }
    case ActionType.TOGGLE_TODO_ITEM_COMPLETE: {
      const items = state.items.map(item => ({ ...item }));
      items[action.index].completed = !items[action.index].completed;
      return { items };
    }
    case ActionType.REMOVE_COMPLETED_TODO_ITEMS: {
      const items = state.items.filter(item => !item.completed);
      return { items };
    }
    default:
      return state;
  }
};
