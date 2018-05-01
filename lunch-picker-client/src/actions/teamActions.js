import { TEAM_ACTIONS } from './types';
import * as appActions from './appActions';
import { teamService } from '../aws/api';

export const updateTeamField = (field, value) => {
  return {
    type: TEAM_ACTIONS.UPDATE_TEAM_FIELD,
    payload: { field, value }
  };
};

export const getTeamDetails = teamId => async dispatch => {
  dispatch(appActions.loading());

  try {
    const data = await teamService.get(teamId);
    dispatch({
      type: TEAM_ACTIONS.GET_TEAM_DETAILS_SUCCESS,
      payload: { team: data }
    });
  } catch (e) {
    dispatch(appActions.showError(e.message));
  }
  dispatch(appActions.loading(false));
};

export const getMyTeams = () => async dispatch => {
  dispatch(appActions.loading());

  try {
    const data = await teamService.getMyTeams();
    dispatch({
      type: TEAM_ACTIONS.GET_MY_TEAM_SUCCESS,
      payload: { teams: data }
    });

    data.forEach(team => {
      const { teamId } = team;
      dispatch(getTeamMembers(teamId));
    });
  } catch (e) {
    dispatch(appActions.showError(e.message));
  }
  dispatch(appActions.loading(false));
};

export const getJoinedTeams = () => async dispatch => {
  dispatch(appActions.loading());

  try {
    const data = await teamService.getJoinedTeams();
    dispatch({
      type: TEAM_ACTIONS.GET_JOINED_TEAM_SUCCESS,
      payload: { teams: data }
    });

    data.forEach(team => {
      const { teamId } = team;
      dispatch(getTeamMembers(teamId));
    });
  } catch (e) {
    dispatch(appActions.showError(e.message));
  }
  dispatch(appActions.loading(false));
};

export const getTeamMembers = teamId => async dispatch => {
  try {
    const data = await teamService.getTeamMembers(teamId);
    dispatch({
      type: TEAM_ACTIONS.GET_TEAM_MEMBERS_SUCCESS,
      payload: { teamId, members: data }
    });
  } catch (e) {
    dispatch(appActions.showError(e.message));
  }
};

export const createTeam = team => async dispatch => {
  dispatch(appActions.loading());
  try {
    const data = await teamService.create(team);
    dispatch({
      type: TEAM_ACTIONS.SAVE_TEAM_SUCCESS,
      payload: { team: data }
    });
  } catch (e) {
    dispatch(appActions.showError(e.message));
  }
  dispatch(appActions.loading(false));
};

export const updateTeam = team => async dispatch => {
  dispatch(appActions.loading());
  try {
    const data = await teamService.update(team);
    dispatch({
      type: TEAM_ACTIONS.SAVE_TEAM_SUCCESS,
      payload: { team: data }
    });
  } catch (e) {
    dispatch(appActions.showError(e.message));
  }
  dispatch(appActions.loading(false));
};
