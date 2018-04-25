import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import { reviews } from '../../libs/yelpLib';
import * as dynamodbLib from '../../libs/dynamodbLib';

export const handler = async (event, context, callback) => {
  const userId = getUserIdentity(event);
  const { id } = event.pathParameters;

  const item = await dynamodbLib.get(id);

  if (item) {
    console.log('return reviews from dynamo');
    return callback(null, success(item.reviews));
  }
  try {
    await dynamodbLib.update('reviews', result);
    callback(null, success(result));
  } catch (error) {
    callback(null, failure(error));
  }
};
