import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from '../Share';
import { getTeamMembers } from '../../actions';
import { teamMemberSelector } from '../../selectors';

class TeamMembers extends Component {
  componentDidMount = () => {
    const { team, members, getTeamMembers } = this.props;
    if (!team) {
      this.props.history.push('/teams/joined');
    }
    if (!members) {
      getTeamMembers(team.teamId);
    }
  };

  renderMembers = () => {
    return this.props.members.map(m => (
      <Card key={m.userId}>{m.username}</Card>
    ));
  };

  render() {
    return (
      <div className="margin-top-1rem with-footer">
        <div className="page-title">
          <h2>Team Members</h2>
        </div>
        {this.renderMembers()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const teamId = ownProps.match.params.teamId;
  return teamMemberSelector({ ...state, teamId });
};
export default connect(mapStateToProps, { getTeamMembers })(TeamMembers);
