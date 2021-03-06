import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";

import { fetchTasks } from "../../redux/actions/taskActions";
import { signout } from "../../redux/actions/userActions";
import Task from "../../components/Task";

import { TaskType } from "../../types";
import { RootStateType } from "../../redux/reducers";

import { Fab, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SignOutIcon from "@material-ui/icons/ExitToApp";
import styled from "styled-components";
import TasksFilters from "../../components/TasksFilters";

const TasksWrapper = styled.div`
  width: 100%;
  max-width: 860px;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
`;

const TasksHeader = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 3px solid #757c87;
`;

const Title = styled.h1`
  font-size: 1.5em;
  width: 100%;
  color: #edf4ff;
`;

const CreateButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const TasksContainer = styled.div`
  padding-top: 20px;
`;

const EmptyTasksPlaceholder = styled.p`
  color: #edf4ff;
  text-align: center;
  font-size: 22px;
`;

const SignOutIconContainer = styled.div`
  margin-left: 10px;

  .signOutIcon {
    fill: #edf4ff;
  }
`;

const TasksPage = () => {
  const tasks = useSelector((state: RootStateType) => state.tasks.tasks);
  const taskFilters = useSelector(
    (state: RootStateType) => state.tasks.filters
  );

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks(taskFilters));
  }, [dispatch, taskFilters]);

  const handleSignOut = async () => {
    await dispatch(signout());
    history.push("/signin");
  };

  const renderTasks = (tasks: TaskType[] = []) => {
    if (!tasks.length) {
      return (
        <EmptyTasksPlaceholder>
          No tasks available. Create one?
        </EmptyTasksPlaceholder>
      );
    }

    return tasks.map((task: TaskType) => (
      <Task
        key={task.id}
        id={task.id}
        title={task.title}
        description={task.description}
        status={task.status}
      />
    ));
  };

  return (
    <TasksWrapper>
      <TasksHeader>
        <Title>Get things done.</Title>

        <CreateButtonContainer>
          <Fab
            variant="extended"
            onClick={() => {
              history.push("/tasks/create");
              return;
            }}
          >
            <AddIcon />
            Create Task
          </Fab>

          <SignOutIconContainer>
            <IconButton onClick={handleSignOut}>
              <SignOutIcon className="signOutIcon" />
            </IconButton>
          </SignOutIconContainer>
        </CreateButtonContainer>
      </TasksHeader>
      <TasksFilters />
      <TasksContainer>{renderTasks(tasks)}</TasksContainer>
    </TasksWrapper>
  );
};

export default TasksPage;
