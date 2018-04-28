import React, { Component } from 'react';
import { Button } from '../../Share';

class ActionButtons extends Component {
  render() {
    const { show, handleSave, handleCancel } = this.props;
    if (!show) return null;

    return (
      <div>
        <Button
          label="Cancel"
          disabled={false}
          onClick={handleCancel}
          primary={true}
          style={{ float: 'right' }}
        />
        <Button label="Save" disabled={false} onClick={handleSave} />
      </div>
    );
  }
}

export { ActionButtons };
