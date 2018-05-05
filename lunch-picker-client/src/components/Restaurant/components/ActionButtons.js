import React, { Component } from 'react';
import Button from 'material-ui/Button';

class ActionButtons extends Component {
  render() {
    const { show, onSave, onCancel } = this.props;
    if (!show) return null;

    return (
      <div>
        <Button variant="raised" onClick={onCancel} color="primary">
          Cancel
        </Button>
        <Button variant="raised" onClick={onSave} style={{ float: 'right' }}>
          Save
        </Button>
      </div>
    );
  }
}

export { ActionButtons };
