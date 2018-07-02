import { success, failure } from '../../../libs/responseLib';
import { getUserIdentity } from '../../../libs/requestLib';
import TeamRepository from '../../../repositories/TeamRepository';
import UserRepository from '../../../repositories/UserRepository';
import logger from '../../../libs/logLib';

export const handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  const { userId } = data;
  const teamId = event.pathParameters.id;

  const teamRepository = new TeamRepository();
  const userRepository = new UserRepository();

  try {
    const user = await userRepository.get(userId);
    const team = await teamRepository.get(teamId);
    await teamRepository.addUserToTeam({
      teamId,
      userId,
      teamName: team.teamName,
      username: user.username
    });
    callback(null, success());
  } catch (e) {
    logger.error('add user to team error', null, e);
    callback(null, failure(e));
  }
};
