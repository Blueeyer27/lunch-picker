import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';

class SelectedModal extends Component {
  static defaultProps = {
    open: false,
    modal: true,
    names: [],
    handleClose: () => {},
    onSelect: () => {}
  };

  handleClick = name => {
    console.log('select,', name);
    this.props.onSelect(name);
  };

  renderList = () => {
    return this.props.names.map((name, index) => {
      return (
        <li
          className="modal-list"
          key={index}
          onClick={() => this.handleClick(name)}
        >
          {name}
        </li>
      );
    });
  };

  render() {
    return (
      <Dialog
        contentClassName="select-modal"
        modal={this.props.modal}
        open={this.props.open}
        onRequestClose={this.props.handleClose}
      >
        <ul>{this.renderList()}</ul>
      </Dialog>
    );
  }
}

export { SelectedModal };
