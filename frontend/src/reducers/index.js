import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import codeReducer from "./codeReducer";
import modalReducer from "./modalReducer";
import authReducer from "./authReducer";
import snippetReducer from './snippetReducer';

export default combineReducers({
  loading: loadingReducer,
  code: codeReducer,
  modal: modalReducer,
  auth: authReducer,
  snippet: snippetReducer
});
