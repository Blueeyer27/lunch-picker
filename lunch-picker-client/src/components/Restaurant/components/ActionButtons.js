import React, { Component } from 'react';
import { Button } from '../../Share';

class ActionButtons extends Component {
  render() {
    const { show, onSave, onCancel } = this.props;
    if (!show) return null;

    return (
      <div>
        <Button label="Cancel" onClick={onCancel} primary={true} />
        <Button label="Save" onClick={onSave} style={{ float: 'right' }} />
      </div>
    );
  }
}

export { ActionButtons };
