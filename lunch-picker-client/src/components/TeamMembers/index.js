import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    return this.props.members.map(m => <div key={m.userId}>{m.username}</div>);
  };

  render() {
    return (
      <div>
        <h2>Team Members</h2>
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
