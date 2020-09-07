import { SIGNIN, SIGNOUT, SIGNUP } from "../actions/types";

export type UserStateType = {
  username: string;
};

const initialState: UserStateType = {
  username: "",
};

type ActionType = typeof SIGNIN | typeof SIGNOUT | typeof SIGNUP;

export default function (
  state = initialState,
  action: { type: ActionType; payload: object }
) {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        username: action.payload ? action.payload : "",
      };
    case SIGNUP:
      return state;
    case SIGNOUT:
      return {
        ...state,
        username: "",
      };
    default:
      return state;
  }
}
