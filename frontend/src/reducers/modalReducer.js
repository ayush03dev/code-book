import {
  OPEN_LOGIN,
  CLOSE_LOGIN,
  OPEN_REGISTER,
  CLOSE_REGISTER,
} from "../actions/types";

const initialState = {
  login: false,
  register: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch (action.type) {
    case OPEN_LOGIN:
      return { ...initialState, login: true };
    case CLOSE_LOGIN:
      return { ...initialState, login: false };
    case OPEN_REGISTER:
      return { ...initialState, register: true };
    case CLOSE_REGISTER:
      return { ...initialState, register: false };
    default:
      return state;
  }
}
