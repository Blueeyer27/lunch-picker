import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import * as dynamodbLib from '../../libs/dynamodbLib';
import { get } from '../../libs/yelpLib';

export const handler = async (event, context, callback) => {
  const userId = getUserIdentity(event);
  const { id } = event.pathParameters;

  try {
    const item = await dynamodbLib.get(id);

    if (item) {
      console.log('return result from dynamo');
      return callback(null, success(item.details));
    }
    const result = await get(id);

    const params = {
      TableName: 'restaurants',
      Item: {
        restaurantId: result.id,
        details: result
      }
    };
    console.log('save result to dynamo');
    await dynamodbLib.call('put', params);
    callback(null, success(result));
  } catch (error) {
    callback(null, failure(error));
  }
};
