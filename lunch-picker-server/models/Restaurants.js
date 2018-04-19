import Sequelize from 'sequelize';
import { sequelize } from '../sequelize';

export const Restaurants = sequelize.define('restaurants', {
  restaurantId: {
    type: Sequelize.STRING,
    primaryKey: true,
    unique: true,
    notNull: true
  },
  userId: {
    type: Sequelize.STRING,
    notNull: true
  },
  createdAt: {
    type: Sequelize.DATE,
    notNull: true,
    defaultValue: Sequelize.NOW
  },
  profileImage: Sequelize.STRING,
  rating: Sequelize.INTEGER,
  restaurantName: Sequelize.STRING
});
