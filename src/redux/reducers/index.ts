import { combineReducers } from "redux";
import tasks, { TasksStateType } from "./tasks";
import user, { UserStateType } from "./user";

export type RootStateType = {
  tasks: TasksStateType;
  user: UserStateType;
};
export default combineReducers({ user: user, tasks: tasks });
