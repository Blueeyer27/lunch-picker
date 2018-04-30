import { API } from 'aws-amplify';

export const teamService = {
  getMyTeams: () => {
    return API.get('teams', '/teams/owned');
  },
  getJoinedTeams: () => {
    return API.get('teams', '/teams/joined');
  },
  getTeamMembers: teamId => {
    return API.get('teams', `/teams/${teamId}/users`);
  }
};
