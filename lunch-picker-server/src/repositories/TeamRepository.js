import { Invitations } from '../models/Invitations';
import DynamoDBClient from '../libs/dynamodbLib';

export default class TeamRepository {
  constructor() {
    this.dbClient = new DynamoDBClient(`${process.env.STAGE}-teams`);
  }

  async get(teamId) {
    const result = await this.dbClient.get({
      teamId: `T-${teamId}`,
      entityId: `T-${teamId}`
    });

    return {
      teamId: result.teamId.substr(2),
      teamName: result.teamName,
      ownerUserId: result.ownerUserId.substr(2)
    };
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

  async update(item) {
    const keyProps = {
      teamId: `T-${item.teamId}`,
      entityId: `T-${item.teamId}`
    };

    const updateProps = {
      teamName: item.teamName
    };

    const { teamId, teamName, ownerUserId } = await this.dbClient.update(
      keyProps,
      updateProps
    );

    return {
      teamId,
      teamName,
      ownerUserId
    };
  }

  async delete(teamId) {
    await this.dbClient.delete({
      teamId: `T-${teamId}`
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

  async getTeamMembers(teamId) {
    const results = await this.dbClient.query({
      teamId: {
        expression: 'teamId = :teamId',
        value: `T-${teamId}`
      },
      entityId: {
        expression: 'begins_with(entityId, :entityId)',
        value: `U-`
      }
    });

    return results.map(r => {
      const { entityId, username } = r;
      return {
        userId: entityId.substr(2),
        username
      };
    });
  }

  async removeTeamMember(teamId, userId) {
    await this.dbClient.delete({
      teamId: `T-${teamId}`,
      userId: `U-${userId}`
    });
  }

  sendInvitation(invitation) {
    return Invitations.create(invitation);
  }

  updateInvitation(invitationId, fields) {
    return Invitations.update({ ...fields }, { where: { invitationId } });
  }
}
