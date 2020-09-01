import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  Grid,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import styled from "styled-components";

const CardContainer = styled.div`
  margin-bottom: 20px;
`;

const CardTitle = styled.h1`
  margin: 8px 0;
  font-size: 22px;
`;

export type TaskType = {
  id: string;
  title: string;
  description: string;
  status: string;
};

const Task = (props: TaskType) => {
  const deleteTask = () => {
    // dispatch delete task action props.id
  };

  const handleStatusChange = (
    e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    // dispatch update task status props.id, new status
  };
  const { title, description, status } = props;

  return (
    <CardContainer>
      <Card>
        <CardContent>
          <CardTitle>{title}</CardTitle>
          {description}
        </CardContent>
        <CardActions style={{ padding: "14px" }} disableSpacing>
          <Grid
            justify="space-between" // Add it here :)
            container
          >
            <Grid item>
              <FormControl style={{ width: "140px" }}>
                <Select
                  value={status}
                  onChange={handleStatusChange}
                  displayEmpty
                >
                  <MenuItem value={"OPEN"}>Open</MenuItem>
                  <MenuItem value={"IN_PROGRESS"}>In Progress</MenuItem>
                  <MenuItem value={"DONE"}>Done</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item>
              <IconButton onClick={deleteTask}>
                <DeleteIcon color="error" />
              </IconButton>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </CardContainer>
  );
};

export default Task;
