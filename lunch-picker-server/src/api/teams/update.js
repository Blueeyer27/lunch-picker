import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import TeamRepository from '../../repositories/TeamRepository';

export const handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  const teamId = event.pathParameters.id;

  try {
    const repository = new TeamRepository();
    await repository.update(teamId, data);
    callback(null, success());
  } catch (e) {
    callback(null, failure(e));
  }
};
