import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import { getParam } from '../../libs/ssmLib';
import RestaurantRepository from '../../repositories/RestaurantRepository';
import YelpClient from '../../yelp/YelpClient';

export const handler = async (event, context, callback) => {
  const userId = getUserIdentity(event);
  const { id } = event.pathParameters;

  try {
    const repository = new RestaurantRepository();
    const item = await repository.getOnlineDetail(id);
    if (item) {
      return callback(null, success(item.details));
    }

    const apiKey = await getParam('YELP_API_KEY');
    const yelpClient = new YelpClient(apiKey);
    const result = await yelpClient.getDetail(id);

    await repository.saveOnlineDetail(id, result);
    callback(null, success(result));
  } catch (error) {
    callback(null, failure(error));
  }
};
