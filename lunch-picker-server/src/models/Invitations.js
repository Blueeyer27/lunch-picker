import Sequelize from 'sequelize';
import { sequelize } from '../sequelize';

export const Invitations = sequelize.define('teamInvitations', {
  invitationId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    unique: true,
    notNull: true,
    autoIncrement: true
  },
  teamId: {
    type: Sequelize.STRING,
    notNull: true
  },
  inviteeUserId: {
    type: Sequelize.STRING,
    notNull: true
  },
  inviterUserId: {
    type: Sequelize.STRING,
    notNull: true
  },
  status: {
    type: Sequelize.STRING,
    notNull: true
  },
  createdAt: {
    type: Sequelize.DATE,
    notNull: true,
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    type: Sequelize.DATE,
    notNull: true,
    defaultValue: Sequelize.NOW
  }
});
