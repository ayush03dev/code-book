import axios from "axios";
import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS } from "./types";

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST, payload: { email, password } });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });
  try {
    const resp = await axios.post("/user/login", body, config);
    console.log(resp.data);
    dispatch({ type: LOGIN_SUCCESS, payload: resp.data });
  } catch (error) {
    console.error(error);
    dispatch({ type: LOGIN_FAILED, payload: { error } });
  }
};

export const register = (email, password) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST, payload: { email, password } });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    const body = JSON.stringify({ email, password });
    try {
      const resp = await axios.post("/user/register", body, config);
      dispatch({ type: REGISTER_SUCCESS, payload: resp.data });
      console.log(resp.data);
    } catch (error) {
      console.error(error);
      dispatch({ type: REGISTER_FAILED, payload: { error } });
    }
  };
