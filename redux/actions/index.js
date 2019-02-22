// @flow

import ActionType from "../ActionType";

export function addTodoItem(item: string) {
  return {
    type: ActionType.ADD_TODO_ITEM,
    value: item
  };
}

export function removeTodoItem(index: number) {
  return {
    type: ActionType.REMOVE_TODO_ITEM,
    index: index
  };
}

export function toggleTodoItem(index: number) {
  return {
    type: ActionType.TOGGLE_TODO_ITEM_COMPLETE,
    index: index
  };
}

export function toggleHideCompletedItems() {
  return {
    type: ActionType.TOGGLE_HIDE_COMPLETED_ITEMS
  };
}
