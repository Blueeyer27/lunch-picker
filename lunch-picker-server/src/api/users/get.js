import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import UserRepository from '../../repositories/UserRepository';

export const handler = async (event, context, callback) => {
  const userId = getUserIdentity(event);
  const username = event.pathParameters.username;
  try {
    const repository = new UserRepository();
    const users = await repository.getByUsername(username);
    if (users) {
      callback(null, success(users[0]));
    } else {
      callback(null, failure({ status: false, error: 'Item not found' }, 404));
    }
  } catch (error) {
    callback(null, failure({ status: false, error }));
  }
};
