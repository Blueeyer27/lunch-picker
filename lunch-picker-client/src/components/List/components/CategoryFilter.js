import React, { Component } from 'react';
import { Collapse } from 'react-collapse';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';

class CategoryFilter extends Component {
  render() {
    return (
      <Collapse isOpened={this.props.open}>
        <Paper className="filter-panel">
          <Chip
            className="filter-panel-tag"
            key={1}
            label="brunch"
            onDelete={() => {}}
          />
          <Chip
            className="filter-panel-tag"
            key={2}
            label="brunch"
            onDelete={() => {}}
          />
        </Paper>
        <div style={{ paddingBottom: '1rem' }} />
      </Collapse>
    );
  }
}

export { CategoryFilter };
