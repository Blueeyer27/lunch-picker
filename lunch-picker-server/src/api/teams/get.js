import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import TeamRepository from '../../repositories/TeamRepository';

export const handler = async (event, context, callback) => {
  const userId = getUserIdentity(event);
  const teamId = event.pathParameters.id;

  try {
    const repository = new TeamRepository();
    const team = await repository.get(teamId);
    if (team) {
      callback(null, success(team));
    } else {
      callback(null, failure({ status: false, error: 'Item not found' }, 404));
    }
  } catch (error) {
    callback(null, failure({ status: false, error }));
  }
};
