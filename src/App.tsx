import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import SignInPage from "./pages/signin/SignInPage";
import SignUpPage from "./pages/signup/SignUpPage";
import TasksPage from "./pages/tasks/TasksPage";
import CreateTaskPage from "./pages/create-task/CreateTaskPage";

import TokenService from "./services/token.service";
import { setUser } from "./redux/actions/userActions";

import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "./redux/reducers";
import GuardedRoute from "./GuardedRoute";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootStateType) => state.user.isAuthenticated
  );

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
      <Route path="/signin/" component={SignInPage} />
      <Route path="/signup/" component={SignUpPage} />
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
