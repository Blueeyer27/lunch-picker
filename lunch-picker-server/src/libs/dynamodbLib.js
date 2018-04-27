import AWS from 'aws-sdk';

export const call = (action, params) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  return dynamoDb[action](params).promise();
};

export const get = async id => {
  const param = { TableName: 'restaurants', Key: { restaurantId: id } };

  const result = await call('get', param);

  return result.Item;
};

export const add = async (key, details) => {
  const params = {
    TableName: 'restaurants',
    Item: { restaurantId: key, details }
  };

  await call('put', params);
};

export const update = async (id, updateKey, updateValue) => {
  const params = {
    TableName: 'restaurants',
    Key: { restaurantId: id },
    UpdateExpression: `SET ${updateKey} = :${updateKey}`,
    ExpressionAttributeValues: { ':${updateKey}': updateValue },
    ReturnValues: 'ALL_NEW'
  };

  const result = await call('get', params);
  return result.Item;
};
