import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card } from '../Share';
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
          <Link to={`/members/${team.teamId}`}>view members</Link>
          <Link to={`/teams/${team.teamId}`}>edit team</Link>
          <Link to={`/teams/invite/${team.teamId}`}>invite</Link>
        </div>
      </Card>
    ));
  };

  render() {
    return (
      <div className="margin-top-1rem with-footer">
        <div className="page-title">
          <h2>My Teams</h2>
          <Link to="/teams/new">Create Team</Link>
        </div>
        <div>{this.renderMyTeams()}</div>
      </div>
    );
  }
}

export default connect(myTeamSelector, { getMyTeams })(MyTeams);
