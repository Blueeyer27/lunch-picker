import { combineReducers } from 'redux';
import { appReducer, authenticationReducer } from '../reducers';

const rootReducer = combineReducers({
  app: appReducer,
  authentication: authenticationReducer
});

export default rootReducer;
