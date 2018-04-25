import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import { search } from '../../libs/yelpLib';

export const handler = async (event, context, callback) => {
  const userId = getUserIdentity(event);
  const { term, latitude, longitude } = event.queryStringParameters;

  try {
    const results = await search(term, latitude, longitude);
    callback(null, success(results));
  } catch (error) {
    callback(null, failure(error));
  }
};
