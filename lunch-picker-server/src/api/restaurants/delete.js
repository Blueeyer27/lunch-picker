import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import RestaurantRepository from '../../repositories/RestaurantRepository';

export const handler = async (event, context, callback) => {
  const restaurantId = event.pathParameters.id;

  try {
    var repository = new RestaurantRepository();
    await repository.delete(restaurantId);
    callback(null, success({ success: true }));
  } catch (e) {
    callback(null, failure(e));
  }
};
