import { combineReducers } from "redux";
import tasks, { TaskStateType } from "./tasks";
import user, { UserStateType } from "./user";

export type RootStateType = {
  tasks: TaskStateType;
  user: UserStateType;
};
export default combineReducers({ user: user, tasks: tasks });
