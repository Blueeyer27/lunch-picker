import uuid from 'uuid';
import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import UserRepository from '../../repositories/UserRepository';

export const handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);

  const user = { ...data, userId: getUserIdentity(event) };

  const repository = new UserRepository();
  try {
    const newUser = await repository.create(user);
    callback(null, success(newUser));
  } catch (e) {
    callback(null, failure(e));
  }
};
