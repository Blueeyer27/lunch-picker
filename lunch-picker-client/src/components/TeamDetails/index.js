import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Input } from '../Share';
import Button from 'material-ui/Button';
import {
  getTeamDetails,
  getMyTeams,
  createTeam,
  updateTeam,
  updateTeamField
} from '../../actions';
import { teamDetailSelector } from '../../selectors';

class TeamDetails extends Component {
  componentDidMount = () => {
    const { teamId } = this.props.match.params;
    this.props.getTeamDetails(teamId);
  };

  handleChange = (field, value) => {
    this.props.updateTeamField(field, value);
  };

  handleSave = async () => {
    const { details, createTeam, updateTeam, getMyTeams } = this.props;
    if (!details.teamId) {
      await createTeam(details);
    } else {
      await updateTeam(details);
    }
    getMyTeams();
    this.props.history.goBack();
  };

  render() {
    const { details } = this.props;
    return (
      <div>
        <Input
          placeholder="Team Name"
          fullWidth={true}
          value={details.teamName}
          onChange={value => this.handleChange('teamName', value)}
        />
        <Button variant="raised" primary onClick={this.handleSave}>
          Save
        </Button>
      </div>
    );
  }
}

export default withRouter(
  connect(teamDetailSelector, {
    getTeamDetails,
    getMyTeams,
    createTeam,
    updateTeam,
    updateTeamField
  })(TeamDetails)
);
