// @flow
import { Alert } from "react-native";
import type { $ActionType } from "../ActionType";

import ActionType from "../ActionType";

type State = {
  items: Array<{
    value: string,
    completed: boolean
  }>,
  isCompletedHidden: boolean
};

export default (
  state: State = { items: [], isCompletedHidden: false },
  action: { type: $ActionType } & Object
): State => {
  switch (action.type) {
    case ActionType.ADD_TODO_ITEM: {
      const { value }: { value: string } = (action: Object);
      return {
        ...state,
        items: [...state.items, { value, completed: false }]
      };
    }
    case ActionType.REMOVE_TODO_ITEM: {
      const { index }: { index: number } = (action: Object);
      const items = [...state.items];
      items.splice(index, 1);
      return { ...state, items };
    }
    case ActionType.TOGGLE_TODO_ITEM_COMPLETE: {
      const { index }: { index: number } = (action: Object);
      const items = state.items.map(item => ({ ...item }));
      items[index].completed = !items[index].completed;
      return { ...state, items };
    }
    case ActionType.TOGGLE_HIDE_COMPLETED_ITEMS: {
      return { ...state, isCompletedHidden: !state.isCompletedHidden };
    }
    default:
      return state;
  }
};
