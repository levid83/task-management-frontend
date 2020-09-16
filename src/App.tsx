import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import SignInPage from "./pages/signin/SignInPage";
import SignUpPage from "./pages/signup/SignUpPage";
import TasksPage from "./pages/tasks/TasksPage";
import CreateTaskPage from "./pages/create-task/CreateTaskPage";

import TokenService from "./services/token.service";
import { setUser } from "./redux/actions/userActions";

import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser(new TokenService().loadTokenPayload()));
  });
  return (
    <>
      <Route exact path="/" component={TasksPage} />
      <Route path="/signin/" component={SignInPage} />
      <Route path="/signup/" component={SignUpPage} />
      <Route exact path="/tasks" component={TasksPage} />
      <Route exact path="/tasks/create" component={CreateTaskPage} />
    </>
  );
}

export default App;
