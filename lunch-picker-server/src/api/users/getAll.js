import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import UserRepository from '../../repositories/UserRepository';

export const handler = async (event, context, callback) => {
  try {
    const repository = new UserRepository();
    const users = await repository.getAll();
    callback(null, success(users));
  } catch (error) {
    callback(null, failure({ status: false, error }));
  }
};
