import { createSelector } from 'reselect';

const userState = state => state.user;

const getState = user => {
  return { ...user, hasPicked: user.restaurantPicked != null };
};

const listSelector = createSelector(userState, getState);

export { listSelector };
