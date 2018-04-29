import { Teams } from '../models/Teams';
import { TeamMembers } from '../models/TeamMembers';

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

  getTeamsOwnedByUser(userId) {
    return Teams.findAll({ where: { ownerUserId: userId } });
  }

  addUserToTeam(teamId, userId) {
    return TeamMembers.create({
      teamId,
      userId
    });
  }
}
