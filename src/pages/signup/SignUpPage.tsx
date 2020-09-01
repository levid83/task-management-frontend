import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";

import "./SignUpPage.scss";
import ErrorMessage from "../../components/ErrorMessage";

const Heading = styled.h1`
  margin-top: 0;
`;

const FormContainer = styled.div`
  max-width: 480px;
  width: 100%;
  background-color: #edf4ff;
  padding: 30px;
  border-radius: 5px;
`;

const FormField = styled(TextField)`
  width: 100%;
`;

const SignUpPage = () => {
  const [, setUsername] = useState("");
  const [, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submit = async () => {
    try {
      //dispatch signup action
      //redirect to tasks
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="fullscreen-wrapper">
      <FormContainer>
        <Heading>Join us!</Heading>
        <p>Start managing tasks easily.</p>

        {errorMessage && <ErrorMessage message={errorMessage} />}

        <div>
          <FormField
            id="outlined-name"
            label="Username"
            margin="dense"
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <FormField
            id="outlined-name"
            label="Password"
            margin="dense"
            variant="outlined"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p>
          Passwords must contain at least 1 upper case letter, 1 lower case
          letter and one number OR special charracter.
        </p>
        <hr />
        <div>
          <Button
            style={{ marginBottom: "10px" }}
            fullWidth
            variant="contained"
            color="primary"
            onClick={submit}
          >
            SIGN UP
          </Button>
        </div>
      </FormContainer>
    </div>
  );
};
export default SignUpPage;
