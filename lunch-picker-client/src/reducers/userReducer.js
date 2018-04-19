import { USER_ACTIONS } from '../actions/types';

const INITIAL_STATE = {
  restaurants: [],
  restaurantPicked: null,
  restaurantInEdit: null
};

const handleListRestaurants = (state, payload) => {
  return { ...state, restaurants: payload.restaurants };
};

const handleGetRestaurantDetail = (state, payload) => {
  return { ...state, restaurantInEdit: payload.restaurant };
};

const handleCreateRestaurant = state => {
  return { ...state, restaurantInEdit: null };
};

const handleUpdateRestaurant = state => {
  return { ...state, restaurantInEdit: null };
};

const handleDeleteRestaurant = state => {
  return { ...state, restaurantInEdit: null };
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_ACTIONS.LIST_RESTAURANTS:
      return this.handleListRestaurants(state, action.payload);

    case USER_ACTIONS.GET_RESTAURANT_DETAIL:
      return this.handleGetRestaurantDetail(state, action.payload);

    case USER_ACTIONS.CREATE_RESTAURANT:
      return this.handleCreateRestaurant(state);

    case USER_ACTIONS.UPDATE_RESTAURANT:
      return this.handleUpdateRestaurant(state);

    case USER_ACTIONS.DELETE_RESTAURANT:
      return this.handleDeleteRestaurant(state);

    default:
      return state;
  }
};
