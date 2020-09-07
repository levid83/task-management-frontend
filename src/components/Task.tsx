import React from "react";
import { useDispatch } from "react-redux";

import { TaskType } from "../types";
import {
  deleteTask as delTask,
  updateTaskStatus,
} from "../redux/actions/taskActions";

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

const Task = (props: TaskType) => {
  const dispatch = useDispatch();

  const deleteTask = async () => dispatch(delTask(props.id));

  const handleStatusChange = async (e: any) => {
    dispatch(updateTaskStatus(props.id, e.target.value));
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

export default React.memo(Task);
