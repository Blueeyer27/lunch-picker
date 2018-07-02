import { success, failure } from '../../../libs/responseLib';
import { getUserIdentity } from '../../../libs/requestLib';
import TeamRepository from '../../../repositories/TeamRepository';

export const handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  const invitationId = event.pathParameters.id;

  const invitation = {
    status: data.status
  };

  const repository = new TeamRepository();

  try {
    await repository.updateInvitation(invitationId, invitation);
    callback(null, success());
  } catch (e) {
    callback(null, failure(e));
  }
};
