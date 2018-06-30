import AWS from 'aws-sdk';
import logger from './logLib';

export default class DynamoDBClient {
  constructor(tableName) {
    this.tableName = tableName;
  }

  call(action, params) {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();

    return dynamoDb[action](params).promise();
  }

  async get(keyProps) {
    const params = { TableName: this.tableName, Key: keyProps };

    const result = await this.call('get', params);

    return result.Item;
  }

  async add(item) {
    const params = {
      TableName: this.tableName,
      Item: item
    };

    const result = await this.call('put', params);

    return result.Item;
  }

  async update(keyProps, updateProps) {
    const updateExpression = Object.keys(updateProps)
      .map(key => {
        return `${key} = :${key}`;
      })
      .join(', ');

    const expressionAttributeValues = Object.keys(updateProps).reduce(
      (current, nextKey) => {
        return { ...current, [`:${nextKey}`]: updateProps[nextKey] };
      },
      {}
    );

    const params = {
      TableName: this.tableName,
      Key: keyProps,
      UpdateExpression: `set ${updateExpression}`,
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: 'ALL_NEW'
    };

    const result = await this.call('update', params);
    logger.debug('dynamo update result', { result });
    return result.Attributes;
  }

  async delete(keyProps) {
    const params = {
      TableName: this.tableName,
      Key: keyProps
    };

    await this.call('delete', params);
  }

  async query(queryProps) {
    const keyConditionExpression = Object.keys(queryProps)
      .map(key => {
        return `#${key} = :${key}`;
      })
      .join(', ');

    const expressionAttributeNames = Object.keys(queryProps).reduce(
      (current, nextKey) => {
        return { ...current, [`#${nextKey}`]: nextKey };
      },
      {}
    );

    const expressionAttributeValues = Object.keys(queryProps).reduce(
      (current, nextKey) => {
        return { ...current, [`:${nextKey}`]: queryProps[nextKey] };
      },
      {}
    );

    const params = {
      TableName: this.tableName,
      KeyConditionExpression: keyConditionExpression,
      ExpressionAttributeNames: expressionAttributeNames,
      ExpressionAttributeValues: expressionAttributeValues
    };

    const result = await this.call('query', params);

    return result.Items;
  }
}
