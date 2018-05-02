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
        {team.teamName} ({team.members.length} members)
        <Link to={`/members/${team.teamId}`}>view members</Link>
      </Card>
    ));
  };

  render() {
    return (
      <div className="margin-top-1rem with-footer">
        <h2>Joined Teams</h2>
        <div>{this.renderJoinedTeams()}</div>
      </div>
    );
  }
}

export default connect(joinedTeamSelector, { getJoinedTeams })(JoinedTeams);
