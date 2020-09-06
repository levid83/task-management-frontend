import {
  CREATE_TASK,
  UPDATE_TASK_STATUS,
  DELETE_TASK,
  FETCH_TASKS,
} from "../actions/types";
import { TaskType } from "../../types";

export type TaskStateType = {
  tasks: TaskType[];
  task: Partial<TaskType>;
};

export const initialState: TaskStateType = {
  tasks: [],
  task: {},
};

type ActionType =
  | typeof CREATE_TASK
  | typeof UPDATE_TASK_STATUS
  | typeof DELETE_TASK
  | typeof FETCH_TASKS;

export default function (
  state = initialState,
  action: { type: ActionType; payload: any }
) {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        task: action.payload,
      };
    case UPDATE_TASK_STATUS:
      let idx = state.tasks.findIndex((task) => task.id === action.payload.id);
      let newTasks = [...state.tasks];
      newTasks[idx] = action.payload;
      return { ...state, tasks: newTasks };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
        task: null,
      };
    case FETCH_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
}
