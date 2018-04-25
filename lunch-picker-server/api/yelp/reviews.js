import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import { reviews } from '../../libs/yelpLib';

export const handler = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const userId = getUserIdentity(event);
  const { id } = event.pathParameters;
  try {
    const result = await reviews(id);
    callback(null, success(result));
  } catch (error) {
    callback(null, failure(error));
  }
};
