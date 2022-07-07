import {combineReducers} from 'redux';
import loadingReducer from './loadingReducer';
import codeReducer from './codeReducer';

export default combineReducers({ loading: loadingReducer, code: codeReducer });