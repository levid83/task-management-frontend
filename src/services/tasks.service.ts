import HttpService from "./http.service";
import queryString from "query-string";

type TaskFilter = {
  status?: string;
  search?: string;
};

type TaskDTO = {
  title: string;
  description: string;
};

export default class TasksService extends HttpService {
  async fetchTasks({ status, search }: TaskFilter) {
    const queryObj: TaskFilter = {};

    if (status?.length) {
      queryObj.status = status;
    }

    if (search?.length) {
      queryObj.search = search;
    }

    const queryStr = queryString.stringify(queryObj);
    return this.get("tasks" + (queryStr ? `?${queryStr}` : ""));
  }

  async deleteTask(id: number) {
    await this.delete(`tasks/${id}`);
  }

  async updateTaskStatus(id: number, status: string) {
    return this.patch(`tasks/${id}/status`, { status });
  }

  async createTask(task: TaskDTO) {
    return this.post(`tasks`, task);
  }
}
