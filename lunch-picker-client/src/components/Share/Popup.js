import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import Button from 'material-ui/Button';

class Popup extends Component {
  static defaultProps = {
    text: '',
    modal: false,
    open: false,
    onRequestClose: () => {},
    handleComfirm: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentDidMount = () => {
    this.setState({ open: this.props.open });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleConfirm = () => {
    this.props.handleComfirm();
    this.setState({ open: false });
  };

  render() {
    return (
      <Dialog
        actions={[
          <Button variant="raised" onClick={this.handleClose}>
            Cancel
          </Button>,
          <Button variant="raised" onClick={this.handleConfirm}>
            Confirm
          </Button>
        ]}
        modal={false}
        open={this.state.open}
        onRequestClose={this.props.onRequestClose}
      >
        {this.props.text}
      </Dialog>
    );
  }
}

export { Popup };
