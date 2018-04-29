import { success, failure } from '../../../libs/responseLib';
import { getUserIdentity } from '../../../libs/requestLib';
import TeamRepository from '../../../repositories/TeamRepository';
import UserRepository from '../../../repositories/UserRepository';

export const handler = async (event, context, callback) => {
  const teamId = event.pathParameters.id;
  console.log(`get members of team ${teamId}`);

  const teamRepository = new TeamRepository();
  try {
    const members = await teamRepository.getTeamMembers(teamId);
    const userRepository = new UserRepository();
    const users = await userRepository.getList(members.map(m => m.userId));

    callback(null, success(users));
  } catch (e) {
    callback(null, failure(e));
  }
};
