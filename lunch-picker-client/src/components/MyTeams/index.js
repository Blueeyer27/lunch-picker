import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TeamItem } from './components';
import { PageTitle } from '../Share';
import { getMyTeams } from '../../actions';
import { myTeamSelector } from '../../selectors';

class MyTeams extends Component {
  componentDidMount = () => {
    this.props.getMyTeams();
  };

  renderMyTeams = () => {
    return this.props.teams.map(team => (
      <TeamItem key={team.teamId} team={team} />
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
