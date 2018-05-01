import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import RestaurantRepository from '../../repositories/RestaurantRepository';

export const handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);

  const restaurantId = event.pathParameters.id;

  try {
    const repository = new RestaurantRepository();

    await repository.update(restaurantId, data);
    const restaurant = await repository.get(restaurantId);

    callback(null, success(restaurant));
  } catch (e) {
    callback(null, failure(e));
  }
};
