import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getJoinedTeams } from '../../actions';
import { joinedTeamSelector } from '../../selectors';

class JoinedTeams extends Component {
  componentDidMount = () => {
    this.props.getJoinedTeams();
  };

  renderJoinedTeams = () => {
    return this.props.teams.map(team => (
      <div key={team.teamId}>
        {team.teamName} ({team.members.length} members)
        <Link to={`/members/${team.teamId}`}>view members</Link>
      </div>
    ));
  };

  render() {
    return (
      <div>
        <h2>Joined Teams</h2>
        <div>{this.renderJoinedTeams()}</div>
      </div>
    );
  }
}

export default connect(joinedTeamSelector, { getJoinedTeams })(JoinedTeams);
