import { success, failure } from '../../../libs/responseLib';
import { getUserIdentity } from '../../../libs/requestLib';
import TeamRepository from '../../../repositories/TeamRepository';

export const handler = async (event, context, callback) => {
  const teamId = event.pathParameters.id;
  const userId = event.pathParameters.userId;

  console.log(`Remove user ${userId} to team ${teamId}`);

  const repository = new TeamRepository();
  try {
    await repository.removeTeamMember(teamId, userId);
    callback(null, success({ success: true }));
  } catch (e) {
    console.log(e);
    callback(null, failure(e));
  }
};
