import uuid from 'uuid';
import { success, failure } from '../libs/responseLib';
import { getUserIdentity } from '../libs/requestLib';
import { Restaurants } from '../models/Restaurants';

export const handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);

  const { restaurantName, rating, profileImage } = data;

  const restaurant = {
    userId: getUserIdentity(event),
    restaurantId: uuid.v1(),
    restaurantName,
    rating,
    profileImage
  };

  try {
    const result = await Restaurants.create(restaurant);
    callback(null, success(result));
  } catch (e) {
    callback(null, failure(e));
  }
};
