import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { signup } from "../../redux/actions/userActions";

import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";

import "./SignUpPage.scss";
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

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const submit = async () => {
    try {
      await dispatch(signup({ username, password }));
      history.push("/signin");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };
  
    const goToSignIn = () => { 
    history.push("/signin");
    return;
  };

  return (
    <div className="fullscreen-wrapper">
      <FormContainer>
        <Heading>Join us!</Heading>
        <p>Start managing tasks easily.</p>
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
             <Button fullWidth onClick={goToSignIn}>
              Backt to Sign In!
            </Button>
          </div>
        </form>
      </FormContainer>
    </div>
  );
};
export default React.memo(SignUpPage);
