import { createSelector } from 'reselect';

const authState = state => state.auth;

const getState = auth => {
  return auth;
};

const authSelector = createSelector(authState, getState);

export { authSelector };
