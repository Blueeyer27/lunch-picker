import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card } from '../Share';
import { getJoinedTeams } from '../../actions';
import { joinedTeamSelector } from '../../selectors';

class JoinedTeams extends Component {
  componentDidMount = () => {
    this.props.getJoinedTeams();
  };

  renderJoinedTeams = () => {
    return this.props.teams.map(team => (
      <Card key={team.teamId}>
        <div className="card-title">
          {team.teamName} ({team.members.length} members)
        </div>
        <div className="card-link">
          <Link to={`/members/${team.teamId}`}>view members</Link>
        </div>
      </Card>
    ));
  };

  render() {
    return (
      <div className="margin-top-1rem with-footer">
        <div className="page-title">
          <h2>Joined Teams</h2>
        </div>
        <div>{this.renderJoinedTeams()}</div>
      </div>
    );
  }
}

export default connect(joinedTeamSelector, { getJoinedTeams })(JoinedTeams);
