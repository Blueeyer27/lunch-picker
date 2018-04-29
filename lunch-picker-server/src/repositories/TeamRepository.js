import { Teams } from '../models/Teams';

export default class TeamRepository {
  get(id) {
    return Teams.findById(id);
  }

  create(team) {
    return Teams.create(team);
  }

  update(id, fields) {
    return Teams.update({ ...fields }, { where: { teamId: id } });
  }

  delete(id) {
    return Teams.destroy({
      where: {
        teamId: id
      }
    });
  }

  getByUser(userId) {
    return Teams.findAll({ where: { ownerUserId: userId } });
  }
}
