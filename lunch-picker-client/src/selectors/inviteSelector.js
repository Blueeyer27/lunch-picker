import { createSelector } from 'reselect';

const teamIdState = state => state.teamId;
const appState = state => state.app;
const userState = state => state.user;
const teamState = state => state.team;

const getState = (teamId, app, user, team) => {
  const currentTeam = user.myTeams.find(f => f.teamId === teamId);
  const { users } = app;
  const members = currentTeam ? team.teams[currentTeam.teamId] || [] : [];
  const memberUserIds = members.map(member => member.userId);
  const nonMemberUsers = users.filter(
    user => !memberUserIds.includes(user.userId)
  );
  return { team: currentTeam, users: nonMemberUsers };
};

const inviteSelector = createSelector(
  teamIdState,
  appState,
  userState,
  teamState,
  getState
);

export { inviteSelector };
