import React, { Component } from 'react';
import { Button } from '../../Share';

class SaveCancelButtons extends Component {
  render() {
    const { show, handleSave, handleCancel } = this.props;
    if (!show) return null;

    return (
      <div>
        <Button label="Save" disabled={false} onClick={handleSave} />
        <Button
          label="Cancel"
          disabled={false}
          onClick={handleCancel}
          primary={true}
          style={{ float: 'right' }}
        />
      </div>
    );
  }
}

export { SaveCancelButtons };
