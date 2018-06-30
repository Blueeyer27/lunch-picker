import uuid from 'uuid';
import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import logger from '../../libs/logLib';
import RestaurantRepository from '../../repositories/RestaurantRepository';

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
    await repository.create(restaurant);
    logger.debug('restaurant created');
    callback(null, success());
  } catch (e) {
    logger.error(e.message, { data }, e);
    callback(null, failure({ error: e.message }));
  }
};
