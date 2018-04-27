import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import { getParam } from '../../libs/ssmLib';
import YelpClient from '../../yelp/YelpClient';

export const handler = async (event, context, callback) => {
  const userId = getUserIdentity(event);
  const apiKey = await getParam('YELP_API_KEY');
  const yelpClient = new YelpClient(apiKey);
  const { term, latitude, longitude } = event.queryStringParameters;

  try {
    const results = await yelpClient.search(term, latitude, longitude);
    callback(null, success(results));
  } catch (error) {
    callback(null, failure(error));
  }
};
