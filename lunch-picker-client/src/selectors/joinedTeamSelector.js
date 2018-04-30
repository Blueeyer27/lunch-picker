import { createSelector } from 'reselect';

const userState = state => state.user;
const teamState = state => state.team;

const getState = (user, team) => {
  const teams = user.joinedTeams.map(t => {
    return {
      teamId: t.teamId,
      teamName: t.teamName,
      members: team.teams[t.teamId] || []
    };
  });

  return { teams };
};

const joinedTeamSelector = createSelector(userState, teamState, getState);

export { joinedTeamSelector };
