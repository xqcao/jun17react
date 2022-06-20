import { combineReducers } from "redux";
import todo_reduce from "./todo/todo-reduce";
export default combineReducers({
  todoReduceState: todo_reduce,
});
