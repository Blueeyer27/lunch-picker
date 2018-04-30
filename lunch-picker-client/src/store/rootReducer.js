import { combineReducers } from 'redux';
import {
  appReducer,
  authReducer,
  userReducer,
  restaurantReducer,
  restaurantDetailReducer
} from '../reducers';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  user: userReducer,
  restaurant: restaurantReducer,
  restaurantDetails: restaurantDetailReducer
});

export default rootReducer;
