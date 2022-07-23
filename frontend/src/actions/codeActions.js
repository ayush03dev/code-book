import axios from "axios";
import {
  SET_LOADING,
  REMOVE_LOADING,
  EXECUTE,
  UPDATE_CODE,
  UPDATE_INPUT,
  UPDATE_INFO,
  UPDATE_TITLE,
} from "./types";
import { v4 } from "uuid";

export const updateCode = (code) => (dispatch) => {
  dispatch({ type: UPDATE_CODE, payload: { code } });
};

export const updateInput = (input) => (dispatch) => {
  dispatch({ type: UPDATE_INPUT, payload: { input } });
};

export const updateInfo = (description) => (dispatch) => {
  dispatch({ type: UPDATE_INFO, payload: { description } });
};

export const updateTitle = (title) => (dispatch) => {
  dispatch({ type: UPDATE_TITLE, payload: { title } });
};

export const execute = (code, input) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const id = v4();
  dispatch({ type: SET_LOADING, payload: { id } });
  const body = JSON.stringify({ code, input, language: "java" });
  try {
    const resp = await axios.post("/code", body, config);

    dispatch({ type: REMOVE_LOADING, payload: { id } });
    dispatch({ type: EXECUTE, payload: resp.data.stdout });
  } catch (err) {
    dispatch({ type: REMOVE_LOADING, payload: { id } });
    dispatch({ type: EXECUTE, payload: err.response.data.stderr });
  }
};
