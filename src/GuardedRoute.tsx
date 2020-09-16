import React from "react";
import { Route, Redirect } from "react-router-dom";

type GuardedRouteType = {
  component: any;
  auth: boolean;
  rest?: any;
  path?: string;
  exact?: boolean;
};
const GuardedRoute = ({
  component: Component,
  auth,
  ...rest
}: GuardedRouteType) => (
  <Route
    {...rest}
    render={(props) =>
      auth === true ? <Component {...props} /> : <Redirect to="/signin/" />
    }
  />
);

export default GuardedRoute;
