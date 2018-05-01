import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from '../Share';
import {
  getTeamDetails,
  createTeam,
  updateTeam,
  updateTeamField
} from '../../actions';
import { teamDetailSelector } from '../../selectors';

class TeamDetails extends Component {
  componentDidMount = () => {
    const { teamId } = this.props.match.params;
    if (teamId) {
      this.props.getTeamDetails(teamId);
    }
  };

  handleChange = (field, value) => {
    this.props.updateTeamField(field, value);
  };

  handleSave = () => {
    const { details, createTeam, updateTeam } = this.props;
    if (!details.teamId) {
      createTeam(details);
    } else {
      updateTeam(details);
    }
  };

  render() {
    const { details } = this.props;
    return (
      <div>
        <Input
          placeholder="Team Name"
          fullWidht={true}
          value={details.teamName}
          onChange={value => this.handleChange('teamName', value)}
        />
        <Button label="Save" primary onClick={this.handleSave} />
      </div>
    );
  }
}

export default connect(teamDetailSelector, {
  getTeamDetails,
  createTeam,
  updateTeam,
  updateTeamField
})(TeamDetails);
