import uuid from 'uuid';
import * as dynamoDbLib from '../libs/dynamoLib';
import { success, failure } from '../libs/responseLib';
import { TABLE_NAME } from '../consts';
import { getUserIdentity } from '../libs/requestLib';

export const handler = async (event, context, callback) => {
  const userId = getUserIdentity(event);
  const restaurantId = event.pathParameters.id;

  const params = {
    TableName: TABLE_NAME.RESTAURANTS,
    Key: { userId, restaurantId }
  };

  try {
    const result = await dynamoDbLib.call('get', params);
    if (result.Item) {
      callback(null, success(result.Item));
    } else {
      callback(null, failure({ status: false, error: 'Item not found' }, 404));
    }
  } catch (error) {
    callback(null, failure({ status: false, error }, error.statusCode || 500));
  }
};
