import {
  EXECUTE,
  RETRIEVE_SNIPPET_SUCCESS,
  UPDATE_CODE,
  UPDATE_INFO,
  UPDATE_INPUT,
  UPDATE_TITLE,
} from "../actions/types";

const initialState = {
  code: `import java.util.*;

  class Program {
      public static void main(String[] args) {
       // Write code here
      }
  }`,
  input: "",
  output: "Waiting for code execution",
  description: "Default Description",
  title: "Unnamed Snippet",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case EXECUTE:
      return { ...state, output: payload };

    case UPDATE_CODE:
      return { ...state, code: payload.code };

    case UPDATE_INPUT:
      return { ...state, input: payload.input };

    case UPDATE_INFO:
      return { ...state, description: payload.description };

    case UPDATE_TITLE:
      return { ...state, title: payload.title };
    case RETRIEVE_SNIPPET_SUCCESS:
      const { code, input, output, description, title } = action.payload;

      return {
        code,
        input,
        output,
        description,
        title,
      };

    default:
      return state;
  }
}
