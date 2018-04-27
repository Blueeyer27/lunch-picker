import { USER_ACTIONS } from '../actions/types';

const INITIAL_STATE = {
  restaurants: [],
  restaurantPicked: null,
  position: {}
};

const handleListRestaurants = (state, payload) => {
  return { ...state, restaurants: payload.restaurants };
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_ACTIONS.LIST_RESTAURANTS:
      return handleListRestaurants(state, action.payload);

    default:
      return state;
  }
};
