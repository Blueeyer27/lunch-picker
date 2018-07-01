import { success, failure } from '../../../libs/responseLib';
import TeamRepository from '../../../repositories/TeamRepository';

export const handler = async (event, context, callback) => {
  const teamId = event.pathParameters.id;
  const userId = event.pathParameters.userId;

  const repository = new TeamRepository();
  try {
    await repository.removeTeamMember(teamId, userId);
    callback(null, success({ success: true }));
  } catch (e) {
    callback(null, failure(e));
  }
};
