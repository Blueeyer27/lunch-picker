import { USER_ACTIONS, TEAM_ACTIONS } from '../actions/types';

const INITIAL_STATE = {
  restaurants: [],
  restaurantPicked: null,
  position: {},
  myTeams: [],
  joinedTeams: []
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

const handleUpdateThumbnailSrc = (state, payload) => {
  const { id, thumbnail } = payload;
  const restaurants = state.restaurants.map(restaurant => {
    if (restaurant.restaurantId === id) {
      return { ...restaurant, thumbnail };
    }
    return restaurant;
  });
  return { ...state, restaurants };
};

const handleRestaurantPicked = (state, payload) => {
  return { ...state, restaurantPicked: payload.pickedRestaurant };
};

const handleGetJoinedTeamSuccess = (state, payload) => {
  return { ...state, joinedTeams: payload.teams };
};

const handleGetMyTeamSuccess = (state, payload) => {
  return { ...state, myTeams: payload.teams };
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_ACTIONS.LIST_RESTAURANTS:
      return handleListRestaurants(state, action.payload);

    case USER_ACTIONS.UPDATE_IMAGE_SOURCE:
      return handleUpdateImageSrc(state, action.payload);

    case USER_ACTIONS.UPDATE_THUMBNAIL_SOURCE:
      return handleUpdateThumbnailSrc(state, action.payload);

    case USER_ACTIONS.PICK_RESTAURANT:
      return handleRestaurantPicked(state, action.payload);

    case TEAM_ACTIONS.GET_JOINED_TEAM_SUCCESS:
      return handleGetJoinedTeamSuccess(state, action.payload);

    case TEAM_ACTIONS.GET_MY_TEAM_SUCCESS:
      return handleGetMyTeamSuccess(state, action.payload);

    default:
      return state;
  }
};
