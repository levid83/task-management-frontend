import React from "react";
import { Route } from "react-router-dom";

import SignInPage from "./pages/signin/SignInPage";
import SignUpPage from "./pages/signup/SignUpPage";
import TasksPage from "./pages/tasks/TasksPage";
import CreateTaskPage from "./pages/create-task/CreateTaskPage";

function App() {
  return (
    <>
      <Route exact path="/" component={SignInPage} />
      <Route path="/signin/" component={SignInPage} />
      <Route path="/signup/" component={SignUpPage} />
      <Route exact path="/tasks" component={TasksPage} />
      <Route exact path="/tasks/create" component={CreateTaskPage} />
    </>
  );
}

export default App;
