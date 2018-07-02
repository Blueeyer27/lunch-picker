import { createSelector } from 'reselect';

const appState = state => state.app;
const restaurantState = state => state.restaurant;
const detailsState = state => state.restaurantDetails;

const getState = (app, restaurant, details) => {
  return {
    restaurant,
    isDetectedNameModalOpen: app.isDetectedNameModalOpen,
    details,
    hasOnlineInfo: details.externalId != null
  };
};

const restaurantDetailSelector = createSelector(
  appState,
  restaurantState,
  detailsState,
  getState
);

export { restaurantDetailSelector };
