import { TEAM_ACTIONS } from '../actions/types';

const INITIAL_STATE = {
  teams: {},
  details: {}
};

const handleFieldUpdate = (state, payload) => {
  const { field, value } = payload;
  const newDetails = { ...state.details, [field]: value };

  return { ...state, details: newDetails };
};

const handleGetTeamMemberSuccess = (state, payload) => {
  const { teamId, members } = payload;
  const newTeams = { ...state.teams, [teamId]: members };
  return { ...state, teams: newTeams };
};

const handleSaveTeamSuccess = (state, payload) => {
  return { ...state, details: {} };
};

const handleGetTeamDetailSuccess = (state, payload) => {
  const { team } = payload;
  return { ...state, details: team };
};

export const teamReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEAM_ACTIONS.UPDATE_TEAM_FIELD:
      return handleFieldUpdate(state, action.payload);

    case TEAM_ACTIONS.GET_TEAM_MEMBERS_SUCCESS:
      return handleGetTeamMemberSuccess(state, action.payload);

    case TEAM_ACTIONS.GET_TEAM_DETAILS_SUCCESS:
      return handleGetTeamDetailSuccess(state, action.payload);

    case TEAM_ACTIONS.SAVE_TEAM_SUCCESS:
      return handleSaveTeamSuccess(state, action.payload);

    default:
      return state;
  }
};
