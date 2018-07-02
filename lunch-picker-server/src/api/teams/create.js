import uuid from 'uuid';
import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import TeamRepository from '../../repositories/TeamRepository';
import UserRepository from '../../repositories/UserRepository';
import logger from '../../libs/logLib';

export const handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  const userId = getUserIdentity(event);

  const team = {
    teamId: uuid.v1(),
    ownerUserId: userId,
    teamName: data.teamName
  };

  const teamRepository = new TeamRepository();
  const userRepository = new UserRepository();

  try {
    await teamRepository.create(team);
    const user = await userRepository.get(userId);
    const teamUser = {
      teamId: team.teamId,
      userId,
      username: user.username,
      teamName: data.teamName
    };
    await teamRepository.addUserToTeam(teamUser);

    callback(null, success());
  } catch (e) {
    logger.error('create team error', null, e);
    callback(null, failure(e));
  }
};
