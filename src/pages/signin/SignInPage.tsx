import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";

import "./SignInPage.scss";
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

const SignInPage = () => {
  const [, setUsername] = useState("");
  const [, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submit = async () => {
    try {
      //dispatch signin action
      //redirect to tasks
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  const goToSignUp = () => {
    // redirect to signup
    return;
  };

  return (
    <div className="fullscreen-wrapper">
      <FormContainer>
        <Heading>Hello!</Heading>
        <p>Fill in your username and password to sign in.</p>

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
        <hr />
        <div>
          <Button
            style={{ marginBottom: "10px" }}
            fullWidth
            variant="contained"
            color="primary"
            onClick={submit}
          >
            SIGN IN
          </Button>

          <Button fullWidth onClick={goToSignUp}>
            Don't have an account? Sign up now!
          </Button>
        </div>
      </FormContainer>
    </div>
  );
};
export default SignInPage;
