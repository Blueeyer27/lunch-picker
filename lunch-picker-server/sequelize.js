import Sequelize from 'sequelize';
import { DB_CONFIG } from './config';

const { database, username, host } = DB_CONFIG;

export const sequelize = new Sequelize(
  database,
  username,
  process.env.DB_PASSWORD,
  {
    host,
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 1000
    }
  }
);
