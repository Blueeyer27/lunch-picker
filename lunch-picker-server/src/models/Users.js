import Sequelize from 'sequelize';
import { sequelize } from '../sequelize';

export const Restaurants = sequelize.define('users', {
  userId: {
    type: Sequelize.STRING,
    primaryKey: true,
    unique: true,
    notNull: true
  },
  username: {
    type: Sequelize.STRING,
    notNull: true
  },
  createdAt: {
    type: Sequelize.DATE,
    notNull: false,
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    type: Sequelize.DATE,
    notNull: false,
    defaultValue: Sequelize.NOW
  }
});
