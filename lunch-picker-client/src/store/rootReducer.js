import { combineReducers } from 'redux';
import {
  appReducer,
  authReducer,
  userReducer,
  restaurantReducer,
  teamReducer,
  restaurantDetailReducer
} from '../reducers';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  user: userReducer,
  team: teamReducer,
  restaurant: restaurantReducer,
  restaurantDetails: restaurantDetailReducer
});

export default rootReducer;
