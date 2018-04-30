import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import TeamRepository from '../../repositories/TeamRepository';

export const handler = async (event, context, callback) => {
  const userId = getUserIdentity(event);

  try {
    const repository = new TeamRepository();

    const teamsJoined = await repository.getTeamsJoinedByUser(userId);
    const teamIds = teamsJoined.map(t => t.teamId);
    const teams = await repository.getList(teamIds);
    callback(null, success(teams));
  } catch (error) {
    callback(null, failure(error));
  }
};
