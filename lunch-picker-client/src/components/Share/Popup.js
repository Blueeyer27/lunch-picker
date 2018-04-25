import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

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
          <FlatButton label="Cancel" onClick={this.handleClose} />,
          <FlatButton label="Confirm" onClick={this.handleConfirm} />
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
