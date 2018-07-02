import Sequelize from 'sequelize';
import { sequelize } from '../sequelize';

export const TeamMembers = sequelize.define('teamMembers', {
  teamId: {
    type: Sequelize.STRING,
    primaryKey: true,
    unique: true,
    notNull: true
  },
  userId: {
    type: Sequelize.STRING,
    primaryKey: true,
    unique: true,
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
