import { createSelector } from 'reselect';

const teamIdState = state => state.teamId;
const userState = state => state.user;
const teamState = state => state.team;

const getState = (teamId, user, team) => {
  const currentTeam = user.joinedTeams.find(f => f.teamId === teamId);
  const members = currentTeam ? team.teams[currentTeam.teamId] || [] : [];
  return { team: currentTeam, members };
};

const teamMemberSelector = createSelector(
  teamIdState,
  userState,
  teamState,
  getState
);

export { teamMemberSelector };
