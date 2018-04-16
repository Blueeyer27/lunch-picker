import uuid from 'uuid';
import * as dynamoDbLib from '../libs/dynamoLib';
import { success, failure } from '../libs/responseLib';
import { TABLE_NAME } from '../consts';
import { getUserIdentity } from '../libs/requestLib';

export const handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  const userId = getUserIdentity(event);
  const restaurantId = event.pathParameters.id;

  const { restaurantName, rating, profileImage } = data;
  console.log(data);
  const params = {
    TableName: TABLE_NAME.RESTAURANTS,
    Key: { userId, restaurantId },
    UpdateExpression:
      'SET restaurantName = :restaurantName, profileImage = :profileImage, rating = :rating',
    ExpressionAttributeValues: {
      ':restaurantName': restaurantName,
      ':profileImage': profileImage,
      ':rating': rating
    }
  };

  try {
    const result = await dynamoDbLib.call('update', params);
    callback(null, success({ status: true }));
  } catch (error) {
    callback(null, failure({ status: false, error }, error.statusCode || 500));
  }
};
