import {
  OPEN_REGISTER,
  CLOSE_REGISTER,
  OPEN_LOGIN,
  CLOSE_LOGIN,
} from "./types";

export const openRegister = () => (dispatch) => {
  dispatch({ type: OPEN_REGISTER });
};

export const closeRegister = () => (dispatch) => {
  dispatch({ type: CLOSE_REGISTER });
};

export const openLogin = () => (dispatch) => {
  dispatch({ type: OPEN_LOGIN });
};

export const closeLogin = () => (dispatch) => {
  dispatch({ type: CLOSE_LOGIN });
};
