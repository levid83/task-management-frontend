import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { signin } from "../../redux/actions/userActions";

import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";

import "./SignInPage.scss";
import ErrorMessage from "../../components/ErrorMessage";

const Heading = styled.h1`
  margin-top: 0;
`;

const FormContainer = styled.div`
  max-width: 380px;
  width: 100%;
  background-color: #edf4ff;
  padding: 30px;
  border-radius: 5px;
`;

const FormField = styled(TextField)`
  width: 100%;
`;

const SignInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const submit = async () => {
    try {
      await dispatch(signin({ username, password }));
      history.push("/tasks");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  const goToSignUp = () => {
    history.push("/signup");
    return;
  };

  return (
    <div className="fullscreen-wrapper">
      <FormContainer>
        <Heading>Hello!</Heading>
        <p>Fill in your username and password to sign in.</p>
        <form>
          {errorMessage && <ErrorMessage message={errorMessage} />}
          <div>
            <FormField
              id="username"
              label="Username"
              margin="dense"
              variant="outlined"
              autoComplete="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <FormField
              id="password"
              label="Password"
              margin="dense"
              variant="outlined"
              type="password"
              autoComplete="current-password"
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
        </form>
      </FormContainer>
    </div>
  );
};
export default React.memo(SignInPage);
