import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

import { SIGNIN, SIGNOUT, SIGNUP } from "./types";
import AuthService from "../../services/auth.service";

type UserCredentials = {
  username: string;
  password: string;
};

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
  let username;
  try {
    username = await authService.signin(credentials);
  } catch (error) {
    throw error;
  }
  dispatch({ type: SIGNIN, payload: username });
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
