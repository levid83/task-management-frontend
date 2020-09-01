import React, { useEffect } from "react";
import { Fab, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SignOutIcon from "@material-ui/icons/ExitToApp";
import styled from "styled-components";
import Task, { TaskType } from "../../components/Task";

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
  useEffect(() => {
    // dispatch get tasks action
  }, []);

  const handleSignOut = () => {
    // dispatch signout
    // reset task list
    // redirect to signin page
  };

  const renderTasks = (tasks: []) => {
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
              // redirect to create task page
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

      <TasksContainer>{renderTasks([])}</TasksContainer>
    </TasksWrapper>
  );
};

export default TasksPage;
