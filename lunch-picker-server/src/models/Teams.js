import Sequelize from 'sequelize';
import { sequelize } from '../sequelize';

export const Restaurants = sequelize.define('teams', {
  teamId: {
    type: Sequelize.STRING,
    primaryKey: true,
    unique: true,
    notNull: true
  },
  teamName: {
    type: Sequelize.STRING,
    notNull: true
  },
  ownerUserId: {
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
