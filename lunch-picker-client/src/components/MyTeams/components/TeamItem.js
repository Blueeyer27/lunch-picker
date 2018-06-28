import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../Share';

export const TeamItem = ({ team }) => {
  return (
    <Card key={team.teamId}>
      <div className="card-title">
        {team.teamName} ({team.members.length} members)
      </div>
      <div className="card-link">
        <Link to={`/members/${team.teamId}`} className="gray-button">
          view members
        </Link>
        <Link to={`/teams/${team.teamId}`} className="gray-button">
          edit team
        </Link>
        <Link to={`/teams/invite/${team.teamId}`} className="gray-button">
          invite
        </Link>
      </div>
    </Card>
  );
};
