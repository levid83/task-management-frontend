import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";

import SignInPage from "./pages/signin/SignInPage";
import SignUpPage from "./pages/signup/SignUpPage";
import TasksPage from "./pages/tasks/TasksPage";
import CreateTaskPage from "./pages/create-task/CreateTaskPage";

import TokenService from "./services/token.service";
import { setUser } from "./redux/actions/userActions";

import { useDispatch } from "react-redux";
import GuardedRoute from "./GuardedRoute";

function App() {
  const dispatch = useDispatch();

  const {isAuthenticated }=new TokenService().loadTokenPayload();

  useEffect(() => {
    dispatch(setUser(new TokenService().loadTokenPayload()));
  });
  return (
    <>
      <GuardedRoute
        exact
        path="/"
        component={TasksPage}
        auth={isAuthenticated}
      />
      <Route path="/signin/">{isAuthenticated ? <Redirect to="/" />:<SignInPage/>}</Route> 
      <Route path="/signup/" >{isAuthenticated ? <Redirect to="/" />:<SignUpPage/>}</Route>
      <GuardedRoute
        exact
        path="/tasks"
        component={TasksPage}
        auth={isAuthenticated}
      />
      <GuardedRoute
        exact
        path="/tasks/create"
        component={CreateTaskPage}
        auth={isAuthenticated}
      />
    </>
  );
}

export default App;
