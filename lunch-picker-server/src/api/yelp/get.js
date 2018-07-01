import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import { getParam } from '../../libs/ssmLib';
import YelpClient from '../../yelp/YelpClient';
import logger from '../../libs/logLib';

export const handler = async (event, context, callback) => {
  const userId = getUserIdentity(event);
  const { id } = event.pathParameters;

  try {
    const apiKey = await getParam('YELP_API_KEY');
    const yelpClient = new YelpClient(apiKey);
    const result = await yelpClient.getDetail(id);

    callback(null, success(result));
  } catch (error) {
    logger.error('get external details error', { error: error.message }, error);
    callback(null, failure(error));
  }
};
