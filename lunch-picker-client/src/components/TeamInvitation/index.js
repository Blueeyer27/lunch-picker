import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../../actions';
import { inviteSelector } from '../../selectors';

class TeamInvitation extends Component {
  componentDidMount = () => {
    if (!this.props.team) {
      this.props.history.push('/teams/my');
      return;
    }
    this.props.getAllUsers();
  };

  renderUsers = () => {
    return this.props.users.map(user => (
      <div key={user.userId}>{user.username}</div>
    ));
  };

  render() {
    return <div>{this.renderUsers()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const teamId = ownProps.match.params.teamId;
  return inviteSelector({ ...state, teamId });
};

export default connect(mapStateToProps, { getAllUsers })(TeamInvitation);
