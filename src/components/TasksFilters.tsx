import React, { useState } from "react";
import { updateTaskFilters } from "../redux/actions/taskActions";
import {
  Grid,
  FormControl,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { TaskFilters } from "../types";

const FiltersContainer = styled.div`
  margin-top: 20px;
`;

const ControlContainer = styled.div`
  margin-top: 5px;
  background-color: #c0cde0;
  border-radius: 5px;
  padding: 10px;
`;

const TasksFilters = () => {
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const syncFilters = (filters: TaskFilters) =>
    dispatch(updateTaskFilters(filters));

  const handleStatusFilterChange = (e: any) => {
    setStatus(() => {
      syncFilters({ status: e.target.value, search });
      return e.target.value;
    });
  };

  const handleSearchTermChange = (e: any) => {
    setSearch(() => {
      syncFilters({ status, search: e.target.value });
      return e.target.value;
    });
  };

  return (
    <FiltersContainer>
      <Grid justify="space-between" container>
        <Grid item>
          <ControlContainer>
            <FormControl style={{ width: "220px" }}>
              <TextField
                placeholder="Search..."
                value={search}
                onChange={handleSearchTermChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </ControlContainer>
        </Grid>

        <Grid item>
          <ControlContainer>
            <FormControl style={{ width: "220px" }}>
              <Select
                value={status}
                onChange={handleStatusFilterChange}
                displayEmpty
              >
                <MenuItem value="">No status filter</MenuItem>
                <MenuItem value={"OPEN"}>Open</MenuItem>
                <MenuItem value={"IN_PROGRESS"}>In Progress</MenuItem>
                <MenuItem value={"DONE"}>Done</MenuItem>
              </Select>
            </FormControl>
          </ControlContainer>
        </Grid>
      </Grid>
    </FiltersContainer>
  );
};

export default React.memo(TasksFilters);
