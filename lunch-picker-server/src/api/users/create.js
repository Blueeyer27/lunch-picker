import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import UserRepository from '../../repositories/UserRepository';

export const handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);

  const user = { ...data, userId: getUserIdentity(event) };

  const repository = new UserRepository();
  try {
    await repository.create(user);
    callback(null, success());
  } catch (e) {
    callback(null, failure(e));
  }
};
