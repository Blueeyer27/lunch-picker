import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import UserRepository from '../../repositories/UserRepository';
import logger from '../../libs/logLib';

export const handler = async (event, context, callback) => {
  const userId = getUserIdentity(event);

  try {
    const repository = new UserRepository();
    const user = await repository.get(userId);
    if (user) {
      callback(null, success({ user }));
    } else {
      callback(null, failure({ status: false, error: 'Item not found' }, 404));
    }
  } catch (e) {
    logger.error('get user error', { error: e.message }, e);
    callback(null, failure({ error: e.message }));
  }
};
