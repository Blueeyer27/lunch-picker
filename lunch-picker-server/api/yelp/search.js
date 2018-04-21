import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import { search } from '../../libs/yelpLib';

export const handler = async (event, context, callback) => {
  const userId = getUserIdentity(event);
  const { term, location } = event.pathParameters;

  try {
    const results = await search(term, location);
    callback(null, success(results));
  } catch (error) {
    callback(null, failure({ status: false, error }));
  }
};
