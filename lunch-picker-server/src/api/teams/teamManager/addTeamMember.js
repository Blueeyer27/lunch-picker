import uuid from 'uuid';
import { success, failure } from '../../../libs/responseLib';
import { getUserIdentity } from '../../../libs/requestLib';
import TeamRepository from '../../../repositories/TeamRepository';

export const handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  const { userId } = data;
  const teamId = event.pathParameters.id;
  console.log(`Add user ${userId} to team ${teamId}`);

  const repository = new TeamRepository();
  try {
    const teamMember = await repository.addUserToTeam(teamId, userId);
    callback(null, success(teamMember));
  } catch (e) {
    callback(null, failure(e));
  }
};
