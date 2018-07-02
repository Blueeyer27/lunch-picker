import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import UserRepository from '../../repositories/UserRepository';

export const handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  const userId = getUserIdentity(event);

  try {
    const repository = new UserRepository();
    await repository.update(userId, data);
    callback(null, success());
  } catch (e) {
    callback(null, failure(e));
  }
};
