import uuid from 'uuid';
import * as dynamoDbLib from '../libs/dynamoLib';
import { success, failure } from '../libs/responseLib';
import { TABLE_NAME } from '../consts';
import { getUserIdentity } from '../libs/requestLib';

export const handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  const { name, rating, profileImage } = data;
  const params = {
    TableName: TABLE_NAME.RESTAURANTS,
    Item: {
      userId: getUserIdentity(event),
      restaurantId: uuid.v1(),
      name,
      rating,
      profileImage,
      createdAt: new Date().getTime()
    }
  };

  try {
    await dynamoDbLib.call('put', params);
    callback(null, success(params.Item));
  } catch (error) {
    callback(null, failure({ status: false, error }, error.statusCode || 500));
  }
};
