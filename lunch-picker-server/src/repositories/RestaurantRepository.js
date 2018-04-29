import { Restaurants } from '../models/Restaurants';
import * as dynamodbLib from '../libs/dynamodbLib';

export default class RestaurantRepository {
  get(id) {
    return Restaurants.findById(id);
  }

  create(restaurant) {
    return Restaurants.create(restaurant);
  }

  update(id, fields) {
    return Restaurants.update({ ...fields }, { where: { restaurantId: id } });
  }

  delete(id) {
    return Restaurants.destroy({
      where: {
        restaurantId: id
      }
    });
  }

  getByUser(userId) {
    return Restaurants.findAll({ where: { userId } });
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
