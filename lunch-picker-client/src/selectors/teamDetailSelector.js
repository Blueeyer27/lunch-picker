import { createSelector } from 'reselect';

const teamState = state => state.team;

const getState = team => {
  return { details: team.details };
};

const teamDetailSelector = createSelector(teamState, getState);

export { teamDetailSelector };
