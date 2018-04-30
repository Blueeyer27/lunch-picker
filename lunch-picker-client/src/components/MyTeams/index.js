import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMyTeams } from '../../actions';
import { myTeamSelector } from '../../selectors';

class MyTeams extends Component {
  componentDidMount = () => {
    this.props.getMyTeams();
  };

  renderMyTeams = () => {
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
        <h2>My Teams</h2>
        <Link to="/teams/new">Create Team</Link>
        <div>{this.renderMyTeams()}</div>
      </div>
    );
  }
}

export default connect(myTeamSelector, { getMyTeams })(MyTeams);
