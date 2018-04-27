import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import { getParam } from '../../libs/ssmLib';
import RestaurantRepository from '../../repositories/RestaurantRepository';
import YelpClient from '../../yelp/YelpClient';

export const handler = async (event, context, callback) => {
  const userId = getUserIdentity(event);
  const { id } = event.pathParameters;

  const repository = new RestaurantRepository();
  const item = await repository.get(id);

  if (item && item.reviews) {
    return callback(null, success(item.reviews));
  }
  const apiKey = await getParam('YELP_API_KEY');
  const yelpClient = new YelpClient(apiKey);

  const result = await yelpClient.getReviews(id);
  try {
    await repository.saveOnlineReviews(id, 'reviews', result);
    callback(null, success(result));
  } catch (error) {
    callback(null, failure(error));
  }
};
