import { createSelector } from 'reselect';

const appState = state => state.app;
const authState = state => state.auth;

const getState = (app, auth) => {
  return { ...app, authenticated: auth.authenticated };
};

const appSelector = createSelector(appState, authState, getState);

export { appSelector };
