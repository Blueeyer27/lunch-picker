import { createSelector } from 'reselect';

const appState = state => state.app;
const restaurantState = state => state.restaurant;

const getState = (app, restaurant) => {
  return {
    restaurant,
    isDetectedNameModalOpen: app.isDetectedNameModalOpen
  };
};

const newRestaurantSelector = createSelector(
  appState,
  restaurantState,
  getState
);

export { newRestaurantSelector };
