import { TEAM_ACTIONS } from '../actions/types';

const INITIAL_STATE = {
  teams: {}
};

const handleGetTeamMemberSuccess = (state = INITIAL_STATE, payload) => {
  const { teamId, members } = payload;
  const newTeams = { ...state.teams, [teamId]: members };
  return { ...state, teams: newTeams };
};

export const teamReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEAM_ACTIONS.GET_TEAM_MEMBERS_SUCCESS:
      return handleGetTeamMemberSuccess(state, action.payload);

    default:
      return state;
  }
};
