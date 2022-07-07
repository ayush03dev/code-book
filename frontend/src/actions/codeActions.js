import axios from "axios";
import { SET_LOADING, REMOVE_LOADING, EXECUTE, UPDATE_CODE, UPDATE_INPUT } from "./types";
import { v4 } from "uuid";

export const updateCode = code => async (dispatch) => {
  dispatch({type: UPDATE_CODE, payload: {code}});
}

export const updateInput = input => async (dispatch) => {
  dispatch({type: UPDATE_INPUT, payload: {input}});
}

export const execute = (code, input) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const id = v4();
  dispatch({ type: SET_LOADING, payload: {id} })
  const body = JSON.stringify({ code, input, language: "java" });
  try {
    const resp = await axios.post("/code", body, config);

    dispatch({ type: REMOVE_LOADING, payload: {id} })
    dispatch({ type: EXECUTE, payload: resp.data.stdout });

  } catch (err) {
    dispatch({ type: REMOVE_LOADING, payload: {id} })
    dispatch({ type: EXECUTE, payload: err.response.data.stderr });
  }
};
