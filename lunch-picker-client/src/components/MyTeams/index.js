import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, PageTitle } from '../Share';
import { getMyTeams } from '../../actions';
import { myTeamSelector } from '../../selectors';

class MyTeams extends Component {
  componentDidMount = () => {
    this.props.getMyTeams();
  };

  renderMyTeams = () => {
    return this.props.teams.map(team => (
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
    ));
  };

  render() {
    return (
      <div className="margin-top-1rem with-footer">
        <PageTitle title="My Teams">
          <Link to="/teams/new" className="gray-button margin-left-auto">
            Create Team
          </Link>
        </PageTitle>
        <div>{this.renderMyTeams()}</div>
      </div>
    );
  }
}

export default connect(myTeamSelector, { getMyTeams })(MyTeams);
