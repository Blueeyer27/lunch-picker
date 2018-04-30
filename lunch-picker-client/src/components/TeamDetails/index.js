import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from '../Share';
import { createTeam, updateTeamField } from '../../actions';
import { teamDetailSelector } from '../../selectors';

class TeamDetails extends Component {
  handleChange = (field, value) => {
    this.props.updateTeamField(field, value);
  };

  handleSave = () => {
    const { details, createTeam } = this.props;
    createTeam(details);
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
  createTeam,
  updateTeamField
})(TeamDetails);
