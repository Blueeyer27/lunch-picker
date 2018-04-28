import { combineReducers } from 'redux';
import {
  appReducer,
  authReducer,
  userReducer,
  restaurantReducer,
  detailReducer
} from '../reducers';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  user: userReducer,
  restaurant: restaurantReducer,
  details: detailReducer
});

export default rootReducer;
