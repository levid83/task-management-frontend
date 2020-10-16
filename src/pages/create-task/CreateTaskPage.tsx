import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";
import { createTask } from "../../redux/actions/taskActions";

import ErrorMessage from "../../components/ErrorMessage";

import { TextField, FormControl, Button } from "@material-ui/core";
import styled from "styled-components";

const FormWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  max-width: 480px;
  width: 100%;
  background-color: #edf4ff;
  padding: 30px;
  border-radius: 5px;
`;

const CreateTaskPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmitTask = async () => {
    try {
      await dispatch(createTask({ title, description }));
      history.push("/tasks");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };
  const handleCancel= ()=>{
    history.push("/tasks");
  }

  return (
    <FormWrapper>
      <FormContainer>
        <h1>Create a new task</h1>
        {errorMessage && <ErrorMessage message={errorMessage} />}
        <FormControl fullWidth>
          <TextField
            label="Title"
            placeholder="Title"
            margin="normal"
            variant="outlined"
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            label="Description"
            placeholder="Description"
            multiline
            rows="8"
            margin="normal"
            variant="outlined"
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
        <Button
          style={{ marginTop: "10px" }}
          variant="contained"
          color="primary"
          onClick={handleSubmitTask}
        >
          CREATE TASK
        </Button>
        <Button
          style={{ marginTop: "10px", marginLeft:"10px" }}
          variant="contained"
          color="secondary"
          onClick={handleCancel}
        >
         CANCEL
        </Button>
      </FormContainer>
    </FormWrapper>
  );
};
export default CreateTaskPage;
