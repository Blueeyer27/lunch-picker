import { Teams } from '../models/Teams';
import { TeamMembers } from '../models/TeamMembers';
import { Invitations } from '../models/Invitations';

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

  getTeamMembers(teamId) {
    return TeamMembers.findAll({ where: { teamId } });
  }

  removeTeamMember(teamId, userId) {
    return TeamMembers.destroy({ where: { teamId, userId } });
  }

  sendInvitation(invitation) {
    return Invitations.create(invitation);
  }

  updateInvitation(invitationId, fields) {
    return Invitations.update({ ...fields }, { where: { invitationId } });
  }
}
