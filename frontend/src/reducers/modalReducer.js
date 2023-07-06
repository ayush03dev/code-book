import {
  OPEN_LOGIN,
  CLOSE_LOGIN,
  OPEN_REGISTER,
  CLOSE_REGISTER,
  OPEN_LINK,
  CLOSE_LINK,
} from "../actions/types";

const initialState = {
  login: false,
  register: false,
  link: "",
  linkModal: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case OPEN_LOGIN:
      return { ...initialState, login: true };
    case CLOSE_LOGIN:
      return { ...initialState, login: false };
    case OPEN_REGISTER:
      return { ...initialState, register: true };
    case CLOSE_REGISTER:
      return { ...initialState, register: false };
    case OPEN_LINK:
      return { ...initialState, linkModal: true, link: action.payload }
    case CLOSE_LINK:
      return { ...initialState, linkModal: false, link: "" };
    default:
      return state;
  }
}
