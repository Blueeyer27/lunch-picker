import { success, failure } from '../libs/responseLib';
import { getUserIdentity } from '../libs/requestLib';
import RestaurantRepository from '../repositories/RestaurantRepository';

export const handler = async (event, context, callback) => {
  const userId = getUserIdentity(event);

  try {
    const repository = new RestaurantRepository();

    const result = await repository.getByUser(userId);
    callback(null, success(result));
  } catch (error) {
    callback(null, failure(error));
  }
};
