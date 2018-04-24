import { combineReducers } from 'redux';
import {
  appReducer,
  authReducer,
  userReducer,
  restaurantReducer
} from '../reducers';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  user: userReducer,
  restaurant: restaurantReducer
});

export default rootReducer;
