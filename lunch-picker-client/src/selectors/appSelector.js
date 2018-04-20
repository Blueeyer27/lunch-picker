import { createSelector } from 'reselect';

const appState = state => state.app;

const getState = app => {
  return app;
};

const appSelector = createSelector(appState, getState);

export { appSelector };
