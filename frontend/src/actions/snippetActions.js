import axios from "axios";
import { SAVE_SNIPPET, RETRIEVE_SNIPPET } from "./types";

export const retrieveSnippet = (id) => async (dispatch) => {
  dispatch({ type: RETRIEVE_SNIPPET, payload: { id } });

  try {
    const resp = await axios.get(`/snippet/${id}`);
    console.log(resp.data);
  } catch (error) {
    console.error(error);
  }
};

export const saveSnippet = (code, title, info, input) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  dispatch({ type: SAVE_SNIPPET, payload: { code, title, info, input } });

  const body = JSON.stringify({ code, title, info, input });
  try {
    const resp = await axios.post("/snippet", body, config);
    console.log(resp.data);
  } catch (err) {
    console.error(err);
  }
};
