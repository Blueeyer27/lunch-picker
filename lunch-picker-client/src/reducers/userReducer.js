import { USER_ACTIONS } from '../actions/types';

const INITIAL_STATE = {
  restaurants: [],
  restaurantPicked: null,
  position: {}
};

const handleListRestaurants = (state, payload) => {
  return { ...state, restaurants: payload.restaurants };
};

const handleUpdateImageSrc = (state, payload) => {
  const { id, imageSrc } = payload;
  const restaurants = state.restaurants.map(restaurant => {
    if (restaurant.restaurantId === id) {
      return { ...restaurant, imageSrc };
    }
    return restaurant;
  });
  return { ...state, restaurants };
};

const handleRestaurantPicked = (state, payload) => {
  return { ...state, restaurantPicked: payload.pickedRestaurant };
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_ACTIONS.LIST_RESTAURANTS:
      return handleListRestaurants(state, action.payload);

    case USER_ACTIONS.UPDATE_IMAGE_SOURCE:
      return handleUpdateImageSrc(state, action.payload);

    case USER_ACTIONS.PICK_RESTAURANT:
      return handleRestaurantPicked(state, action.payload);

    default:
      return state;
  }
};
