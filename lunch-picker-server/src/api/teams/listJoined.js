import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import TeamRepository from '../../repositories/TeamRepository';

export const handler = async (event, context, callback) => {
  const userId = getUserIdentity(event);

  try {
    const repository = new TeamRepository();

    const result = await repository.getTeamsJoinedByUser(userId);

    callback(null, success(result));
  } catch (error) {
    callback(null, failure(error));
  }
};
