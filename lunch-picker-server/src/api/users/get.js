import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import UserRepository from '../../repositories/UserRepository';

export const handler = async (event, context, callback) => {
  const userId = event.pathParameters.userId;
  try {
    const repository = new UserRepository();
    const user = await repository.get(userId);
    if (user) {
      callback(null, success({ user }));
    } else {
      callback(null, failure({ status: false, error: 'Item not found' }, 404));
    }
  } catch (error) {
    callback(null, failure({ status: false, error }));
  }
};
