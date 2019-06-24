import ItunesDataReducer from './ItunesDataReducers';
import { combineReducers } from 'redux';

export default combineReducers ({
  itunes: ItunesDataReducer
})