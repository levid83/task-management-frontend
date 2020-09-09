import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK_STATUS,
  FETCH_TASKS,
  UPDATE_TASK_FILTER,
} from "./types";
import TasksService from "../../services/tasks.service";
import { TaskType, CreateTaskDTO, TaskFilters } from "../../types";

const taskService = new TasksService();

export const createTask = (task: CreateTaskDTO) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  let result;
  try {
    result = await taskService.createTask(task);
  } catch (error) {
    dispatch({ type: CREATE_TASK, payload: null });
    throw error;
  }
  dispatch({ type: CREATE_TASK, payload: result });
};

export const deleteTask = (id: number) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    await taskService.deleteTask(id);
    dispatch({ type: DELETE_TASK, payload: id });
  } catch (error) {
    dispatch({ type: DELETE_TASK, payload: null });
  }
};

export const updateTaskStatus = (id: number, status: string) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  let task;
  try {
    task = (await taskService.updateTaskStatus(id, status)) as {
      data: TaskType;
    };
    dispatch({ type: UPDATE_TASK_STATUS, payload: task.data });
  } catch (error) {
    dispatch({ type: UPDATE_TASK_STATUS, payload: null });
  }
};

export const fetchTasks = (filter: TaskFilters) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  let tasks;
  try {
    tasks = await taskService.fetchTasks(filter);
    dispatch({ type: FETCH_TASKS, payload: tasks ? tasks.data : [] });
  } catch (error) {
    dispatch({ type: FETCH_TASKS, payload: [] });
  }
};

export const updateTaskFilters = (filters: TaskFilters) => {
  return {
    type: UPDATE_TASK_FILTER,
    payload: filters,
  };
};
