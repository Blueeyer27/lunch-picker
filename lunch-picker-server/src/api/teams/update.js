import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import TeamRepository from '../../repositories/TeamRepository';

export const handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  const teamId = event.pathParameters.id;

  try {
    const repository = new TeamRepository();
    const team = await repository.update({ ...data, teamId });

    callback(null, success(team));
  } catch (e) {
    callback(null, failure(e));
  }
};
