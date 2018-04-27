import { success, failure } from '../libs/responseLib';
import { getUserIdentity } from '../libs/requestLib';
import RestaurantRepository from '../repositories/RestaurantRepository';

export const handler = async (event, context, callback) => {
  const userId = getUserIdentity(event);
  const restaurantId = event.pathParameters.id;

  try {
    const repository = new RestaurantRepository();
    const restaurant = await repository.get(restaurantId);
    if (restaurant) {
      callback(null, success(restaurant));
    } else {
      callback(null, failure({ status: false, error: 'Item not found' }, 404));
    }
  } catch (error) {
    callback(null, failure({ status: false, error }));
  }
};
