import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import logger from '../../libs/logLib';
import RestaurantRepository from '../../repositories/RestaurantRepository';

export const handler = async (event, context, callback) => {
  const userId = getUserIdentity(event);
  const data = JSON.parse(event.body);

  const restaurantId = event.pathParameters.id;

  try {
    const repository = new RestaurantRepository();

    const restaurant = await repository.get(userId, restaurantId);

    logger.debug('found restaurant', { restaurant });

    const result = await repository.update({
      ...restaurant,
      ...data
    });

    callback(null, success({ restaurant: result }));
  } catch (e) {
    logger.error(e.message, { data }, e);
    callback(null, failure(e));
  }
};
