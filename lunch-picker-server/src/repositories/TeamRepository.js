import Sequelize from 'sequelize';
import { Teams } from '../models/Teams';
import { TeamMembers } from '../models/TeamMembers';
import { Invitations } from '../models/Invitations';
import DynamoDBClient from '../libs/dynamodbLib';

const Op = Sequelize.Op;

export default class TeamRepository {
  constructor() {
    this.dbClient = new DynamoDBClient(`${process.env.STAGE}-teams`);
  }

  get(id) {
    return Teams.findById(id);
  }

  getList(ids) {
    return Teams.findAll({
      where: {
        teamId: {
          [Op.in]: ids
        }
      }
    });
  }

  async create(item) {
    const team = {
      teamId: `T-${item.teamId}`,
      entityId: `T-${item.teamId}`,
      teamName: item.teamName,
      ownerUserId: `U-${item.ownerUserId}`
    };
    await this.dbClient.add(team);
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

  async getTeamsOwnedByUser(userId) {
    const results = await this.dbClient.query(
      {
        ownerUserId: {
          expression: 'ownerUserId = :ownerUserId',
          value: `U-${userId}`
        }
      },
      'TeamsOwnedByUserIndex'
    );

    return results.map(r => {
      return {
        teamId: r.teamId.substr(2),
        teamName: r.teamName
      };
    });
  }

  async getTeamsJoinedByUser(userId) {
    const results = await this.dbClient.query(
      {
        entityId: {
          expression: 'entityId = :entityId',
          value: `U-${userId}`
        }
      },
      'TeamsJoinedByUserIndex'
    );

    return results.map(r => {
      return {
        teamId: r.teamId.substr(2),
        teamName: r.teamName
      };
    });
  }

  async addUserToTeam(item) {
    const teamUser = {
      teamId: `T-${item.teamId}`,
      entityId: `U-${item.userId}`,
      username: item.username,
      teamName: item.teamName
    };
    await this.dbClient.add(teamUser);
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
