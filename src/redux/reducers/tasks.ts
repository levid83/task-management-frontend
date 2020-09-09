import {
  CREATE_TASK,
  UPDATE_TASK_STATUS,
  DELETE_TASK,
  FETCH_TASKS,
  UPDATE_TASK_FILTER,
} from "../actions/types";
import { TaskType, TaskFilters } from "../../types";

export type TasksStateType = {
  tasks: TaskType[];
  filters: TaskFilters;
};

export const initialState: TasksStateType = {
  tasks: [],
  filters: { search: "", status: "" },
};

type ActionType =
  | typeof CREATE_TASK
  | typeof UPDATE_TASK_STATUS
  | typeof DELETE_TASK
  | typeof FETCH_TASKS
  | typeof UPDATE_TASK_FILTER;

export default function (
  state = initialState,
  action: { type: ActionType; payload: any }
) {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        tasks: action.payload ? state.tasks.push(action.payload) : state.tasks,
      };
    case UPDATE_TASK_STATUS:
      let idx = state.tasks.findIndex((task) => task.id === action.payload.id);
      let newTasks = [...state.tasks];
      if (idx >= 0 && action.payload) {
        newTasks[idx] = action.payload;
      }
      return { ...state, tasks: newTasks };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case FETCH_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case UPDATE_TASK_FILTER:
      return { ...state, filters: action.payload };
    default:
      return state;
  }
}
