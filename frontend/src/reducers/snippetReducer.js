import {
  RETRIEVE_SNIPPET_FAILED,
  RETRIEVE_SNIPPET_REQUEST,
  RETRIEVE_SNIPPET_SUCCESS,
} from "../actions/types";

const initialState = {
  loading: false,
  code: "",
  input: "",
  output: "",
  description: "",
  title: "",
  success: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RETRIEVE_SNIPPET_REQUEST:
      return { ...state, loading: true };

    case RETRIEVE_SNIPPET_SUCCESS:
      const { code, input, output, description, title } = action.payload;

      return {
        code,
        input,
        output,
        description,
        title,
        success: true,
        loading: false,
      };
    case RETRIEVE_SNIPPET_FAILED:
      return { ...state, success: false };

    default:
      return state;
  }
}
