import { combineReducers } from 'redux';
import {
  appReducer,
  authReducer,
  onlineReducer,
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
  online: onlineReducer,
  restaurant: restaurantReducer,
  restaurantDetails: restaurantDetailReducer
});

export default rootReducer;
