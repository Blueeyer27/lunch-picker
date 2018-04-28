import { createSelector } from 'reselect';

const appState = state => state.app;
const restaurantState = state => state.restaurant;
const detailsState = state => state.details;

const getState = (app, restaurant, details) => {
  return {
    restaurant,
    isDetectedNameModalOpen: app.isDetectedNameModalOpen,
    details,
    hasOnlineInfo: restaurant.searchSummary.id != null
  };
};

const detailSelector = createSelector(
  appState,
  restaurantState,
  detailsState,
  getState
);

export { detailSelector };
