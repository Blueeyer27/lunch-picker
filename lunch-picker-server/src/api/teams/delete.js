import { success, failure } from '../../libs/responseLib';
import TeamRepository from '../../repositories/TeamRepository';

export const handler = async (event, context, callback) => {
  const teamId = event.pathParameters.id;

  try {
    var repository = new TeamRepository();
    await repository.delete(teamId);
    callback(null, success({ success: true }));
  } catch (e) {
    callback(null, failure(e));
  }
};
