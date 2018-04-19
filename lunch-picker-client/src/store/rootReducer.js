import { combineReducers } from 'redux';
import { appReducer, authReducer } from '../reducers';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer
});

export default rootReducer;
