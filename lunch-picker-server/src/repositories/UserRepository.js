import Sequelize from 'sequelize';
import { Users } from '../models/Users';

const Op = Sequelize.Op;

export default class UserRepository {
  get(id) {
    return Users.findById(id);
  }

  getAll() {
    return Users.findAll();
  }

  getByUsername(username) {
    return Users.findAll({ where: { userToken: username } });
  }

  create(user) {
    return Users.create(user);
  }

  update(id, fields) {
    return Users.update({ ...fields }, { where: { userId: id } });
  }

  getList(ids) {
    return Users.findAll({
      where: {
        userId: {
          [Op.in]: ids
        }
      }
    });
  }
}
