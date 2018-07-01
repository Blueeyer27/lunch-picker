import { success, failure } from '../../../libs/responseLib';
import { getUserIdentity } from '../../../libs/requestLib';
import TeamRepository from '../../../repositories/TeamRepository';
import logger from '../../../libs/logLib';

export const handler = async (event, context, callback) => {
  const teamId = event.pathParameters.id;

  const teamRepository = new TeamRepository();
  try {
    const users = await teamRepository.getTeamMembers(teamId);

    callback(null, success(users));
  } catch (e) {
    logger.error('get team members error', null, e);
    callback(null, failure(e));
  }
};
