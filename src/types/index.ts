export type UserCredentials = {
  username: string;
  password: string;
};

export type TaskType = {
  id: number;
  title: string;
  description: string;
  status: string;
};

export type CreateTaskDTO = {
  title: string;
  description: string;
};

export type TaskFilters = {
  status?: string;
  search?: string;
};
