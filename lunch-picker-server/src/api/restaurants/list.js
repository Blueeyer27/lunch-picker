import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import RestaurantRepository from '../../repositories/RestaurantRepository';
import logger from '../../libs/logLib';

export const handler = async (event, context, callback) => {
  const userId = getUserIdentity(event);
  logger.debug('list restaurants', { userId });
  try {
    const repository = new RestaurantRepository();

    const result = await repository.getByUser(userId);
    logger.debug('list restaurants', { result });

    callback(null, success(result));
  } catch (error) {
    logger.error('list restaurants error', { error: error.message }, error);
    callback(null, failure(error));
  }
};
