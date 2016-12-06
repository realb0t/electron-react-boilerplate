// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import project from './project';

const rootReducer = combineReducers({
  counter,
  project,
  routing
});

export default rootReducer;
