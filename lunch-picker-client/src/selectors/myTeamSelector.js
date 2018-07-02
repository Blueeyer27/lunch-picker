import { createSelector } from 'reselect';

const userState = state => state.user;
const teamState = state => state.team;

const getState = (user, team) => {
  const teams = user.myTeams.map(t => {
    return {
      teamId: t.teamId,
      teamName: t.teamName,
      members: team.teams[t.teamId] || []
    };
  });

  return { teams };
};

const myTeamSelector = createSelector(userState, teamState, getState);

export { myTeamSelector };
