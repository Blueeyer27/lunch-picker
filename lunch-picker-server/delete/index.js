import uuid from 'uuid';
import * as dynamoDbLib from '../libs/dynamoLib';
import { success, failure } from '../libs/responseLib';
import { TABLE_NAME } from '../consts';
import { getUserIdentity } from '../libs/requestLib';

export const handler = async (event, context, callback) => {
  const params = {
    TableName: TABLE_NAME.RESTAURANTS,
    Key: {
      userId: getUserIdentity(event),
      restaurantId: event.pathParameters.id
    }
  };

  try {
    const result = await dynamoDbLib.call('delete', params);
    callback(null, success({ status: true }));
  } catch (error) {
    callback(null, failure({ status: false, error }, error.statusCode || 500));
  }
};
