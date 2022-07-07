import { EXECUTE, UPDATE_CODE, UPDATE_INPUT } from "../actions/types";

const initialState = {
  code: `import java.util.*;

  class Program {
      public static void main(String[] args) {
       // Write code here
      }
  }`,
  input: "",
  output: "Waiting for code execution",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case EXECUTE:
      return { ...state, output: payload };

    case UPDATE_CODE:
        return {...state, code: payload.code};

    case UPDATE_INPUT:
        return {...state, input: payload.input};

    default:
      return state;
  }
}
