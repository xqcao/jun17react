import * as types from "./todo-type";

export const todo_add = (x) => ({
  type: types.TODO_ADD,
  payload: x,
});

export const todo_remove = (x) => ({
  type: types.TODO_REMOVE,
  payload: x,
});
export const todo_update = (x) => ({
  type: types.TODO_UPDATE,
  payload: x,
});
