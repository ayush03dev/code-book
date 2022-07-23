import {
  LOGIN_REQUEST,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
} from "../actions/types";

const initialState = {
  auth: false,
  token: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case LOGIN_FAILED:
    case REGISTER_FAILED:
      return initialState;

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {...state, auth: true, token: payload.token };
    default:
      return state;
  }
}
