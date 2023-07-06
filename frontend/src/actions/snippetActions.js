import axios from "axios";
import {
  SAVE_SNIPPET,
  RETRIEVE_SNIPPET_REQUEST,
  RETRIEVE_SNIPPET_SUCCESS,
  RETRIEVE_SNIPPET_FAILED,
  OPEN_LINK,
} from "./types";

export const retrieveSnippet = (id) => async (dispatch) => {
  dispatch({ type: RETRIEVE_SNIPPET_REQUEST, payload: { id } });

  try {
    const resp = await axios.get(`/snippet/${id}`);
    dispatch({ type: RETRIEVE_SNIPPET_SUCCESS, payload: resp.data });
    console.log(resp.data);

  } catch (error) {
    dispatch({ type: RETRIEVE_SNIPPET_FAILED });
    console.error(error);
  }
};

export const saveSnippet = (code, language, title, description, input, token) => async (
  dispatch
) => {
  console.log(title);
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };

  dispatch({
    type: SAVE_SNIPPET,
    payload: { code, title, description, input },
  });

  const body = JSON.stringify({ code, language, title, description, input });
  try {
    const resp = await axios.post("/snippet", body, config);
    console.log(resp.data);
    dispatch({ type: OPEN_LINK, payload: resp.data._id })
    // window.open(`/snippet/${resp.data._id}`);
  } catch (err) {
    console.error(err);
  }
};
