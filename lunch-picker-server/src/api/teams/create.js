import uuid from 'uuid';
import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import TeamRepository from '../../repositories/TeamRepository';

export const handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);

  const team = {
    teamId: uuid.v1(),
    ownerUserId: getUserIdentity(event),
    teamName: data.teamName
  };

  const repository = new TeamRepository();
  try {
    const newTeam = await repository.create(team);
    callback(null, success(newTeam));
  } catch (e) {
    callback(null, failure(e));
  }
};
