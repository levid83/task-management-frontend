import {
  SIGNIN,
  SIGNOUT,
  SIGNUP,
  CHECK_AUTH,
  SET_USER,
} from "../actions/types";

export type UserStateType = {
  username: string;
  isAuthenticated: boolean;
};

const initialState: UserStateType = {
  username: "",
  isAuthenticated: false,
};

type ActionType =
  | typeof SIGNIN
  | typeof SIGNOUT
  | typeof SIGNUP
  | typeof CHECK_AUTH
  | typeof SET_USER;

export default function (
  state = initialState,
  action: { type: ActionType; payload: any }
) {
  switch (action.type) {
    case SIGNIN:
      return state;
    case SIGNUP:
      return state;
    case SIGNOUT:
      return {
        ...state,
        username: "",
        isAuthenticated: false,
      };
    case CHECK_AUTH:
      return {
        ...state,
        username: action.payload.username,
        isAuthenticated: action.payload.isAuthenticated,
      };
    case SET_USER:
      return {
        ...state,
        username: action.payload.username,
        isAuthenticated: action.payload.isAuthenticated,
      };
    default:
      return state;
  }
}
