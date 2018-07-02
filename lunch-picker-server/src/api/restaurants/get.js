import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import logger from '../../libs/logLib';
import RestaurantRepository from '../../repositories/RestaurantRepository';

export const handler = async (event, context, callback) => {
  const userId = getUserIdentity(event);
  const restaurantId = event.pathParameters.id;

  try {
    const repository = new RestaurantRepository();
    const restaurant = await repository.get(userId, restaurantId);
    if (restaurant) {
      callback(null, success(restaurant));
    } else {
      callback(null, failure({ status: false, error: 'Item not found' }, 404));
    }
  } catch (error) {
    logger.error(e.message, { data }, e);
    callback(null, failure({ status: false, error }));
  }
};
