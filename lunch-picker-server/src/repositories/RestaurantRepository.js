import * as dynamodbLib from '../libs/dynamodbLib';
import DynamoDBClient from '../libs/dynamodbLib';

export default class RestaurantRepository {
  constructor() {
    this.dbClient = new DynamoDBClient(`${process.env.STAGE}-users`);
  }

  async get(userId, restaurantId) {
    const result = await this.dbClient.get({
      userId: `U-${userId}`,
      entityId: `R-${restaurantId}`
    });

    const {
      restaurantName,
      rating,
      entityId,
      profileImage,
      externalId
    } = result;
    return {
      restaurantId: entityId.substr(2),
      userId: result.userId.substr(2),
      rating,
      restaurantName,
      profileImage,
      externalId
    };
  }

  async create(item) {
    await this.dbClient.add({
      userId: `U-${item.userId}`,
      entityId: `R-${item.restaurantId}`,
      restaurantName: item.restaurantName,
      profileImage: item.profileImage,
      rating: item.rating,
      externalId: item.externalId
    });
  }

  async update(item) {
    const keyProps = {
      userId: `U-${item.userId}`,
      entityId: `R-${item.restaurantId}`
    };

    const updateProps = {
      restaurantName: item.restaurantName,
      profileImage: item.profileImage,
      rating: item.rating
    };

    const {
      userId,
      entityId,
      rating,
      restaurantName,
      profileImage
    } = await this.dbClient.update(keyProps, updateProps);

    return {
      restaurantId: entityId.substr(2),
      userId: userId.substr(2),
      rating,
      restaurantName,
      profileImage
    };
  }

  async delete(userId, restaurantId) {
    await this.dbClient.delete({
      userId: `U-${userId}`,
      entityId: `R-${restaurantId}`
    });
  }

  async getByUser(userId) {
    const results = await this.dbClient.query({
      userId: {
        expression: 'userId = :userId',
        value: `U-${userId}`
      },
      entityId: {
        value: `R-`,
        expression: 'begins_with(entityId, :entityId)'
      }
    });
    return results.map(r => {
      const { entityId, rating, restaurantName, profileImage } = r;
      return {
        restaurantId: entityId.substr(2),
        userId: r.userId.substr(2),
        rating,
        restaurantName,
        profileImage
      };
    });
  }

  getOnlineDetail(id) {
    return dynamodbLib.get(id);
  }

  saveOnlineDetail(detail) {
    return dynamodbLib.add(detail.id, detail);
  }

  saveOnlineReviews(id, reviews) {
    return dynamodbLib.update(id, 'reviews', reviews);
  }
}
