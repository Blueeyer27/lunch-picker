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
  },
  get: teamId => {
    return API.get('teams', `/teams/${teamId}`);
  },
  create: team => {
    return API.post('teams', '/teams', { body: team });
  },
  update: team => {
    return API.put('teams', `/teams/${team.teamId}`, { body: team });
  }
};
