import { createSelector } from 'reselect';

const userState = state => state.user;

const getState = user => {
  return user;
};

const listSelector = createSelector(userState, getState);

export { listSelector };
