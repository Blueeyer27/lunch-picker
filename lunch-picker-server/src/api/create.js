import uuid from 'uuid';
import { success, failure } from '../libs/responseLib';
import { getUserIdentity } from '../libs/requestLib';
import RestaurantRepository from '../repositories/RestaurantRepository';

export const handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);

  const { restaurantName, rating, profileImage, externalId } = data;

  const restaurant = {
    userId: getUserIdentity(event),
    restaurantId: uuid.v1(),
    restaurantName,
    rating,
    externalId: externalId || null,
    profileImage
  };

  const repository = new RestaurantRepository();
  try {
    const newRestaurant = await repository.create(restaurant);
    callback(null, success(newRestaurant));
  } catch (e) {
    callback(null, failure(e));
  }
};
