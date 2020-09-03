import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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

const CreateTaskPage = (props: any) => {
  const [, setTitle] = useState("");
  const [, setDescription] = useState("");

  const history = useHistory();

  const handleSubmitTask = async () => {
    history.push("/tasks");
  };

  return (
    <FormWrapper>
      <FormContainer>
        <h1>Create a new task</h1>
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
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSubmitTask}
        >
          CREATE TASK
        </Button>
      </FormContainer>
    </FormWrapper>
  );
};
export default CreateTaskPage;
