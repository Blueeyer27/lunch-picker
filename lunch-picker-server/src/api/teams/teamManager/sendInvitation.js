import { success, failure } from '../../../libs/responseLib';
import { getUserIdentity } from '../../../libs/requestLib';
import TeamRepository from '../../../repositories/TeamRepository';
import { INVITATION_STATUS } from '../../../constants';

export const handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  const { userId } = data;
  const teamId = event.pathParameters.id;
  const invitation = {
    teamId,
    inviteeUserId: data.inviteeId,
    inviterUserId: getUserIdentity(event),
    status: INVITATION_STATUS.PENDING
  };
  const repository = new TeamRepository();
  try {
    const newInvitation = await repository.sendInvitation(invitation);
    callback(null, success(newInvitation));
  } catch (e) {
    callback(null, failure(e));
  }
};
