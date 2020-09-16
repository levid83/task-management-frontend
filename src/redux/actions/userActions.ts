import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

import { SIGNIN, SIGNOUT, SIGNUP, CHECK_AUTH, SET_USER } from "./types";
import AuthService from "../../services/auth.service";
import { UserCredentials } from "../../types";

const authService = new AuthService();

export const signup = (credentials: UserCredentials) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    await authService.signup(credentials);
  } catch (error) {
    throw error;
  }
  dispatch({ type: SIGNUP, payload: null });
};

export const signin = (credentials: UserCredentials) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    await authService.signin(credentials);
  } catch (error) {
    throw error;
  }
  dispatch({ type: SIGNIN, payload: null });
};

export const signout = () => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    await authService.signout();
  } catch (error) {
    throw error;
  }
  dispatch({ type: SIGNOUT, payload: null });
};

export const checkAuth = () => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  let result;
  try {
    result = await authService.checkAuth();
    dispatch({
      type: CHECK_AUTH,
      payload: result ? result.data : { username: "", isAuthenicated: false },
    });
  } catch (error) {
    dispatch({
      type: CHECK_AUTH,
      payload: { username: "", isAuthenicated: false },
    });
  }
};

export const setUser = ({
  username,
  isAuthenticated,
}: {
  username: string;
  isAuthenticated: boolean;
}) => {
  return {
    type: SET_USER,
    payload: { username, isAuthenticated },
  };
};
