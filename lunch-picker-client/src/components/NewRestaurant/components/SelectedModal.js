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
        title="Are these restaurants?"
        modal={this.props.modal}
        open={this.props.open}
        onRequestClose={this.props.handleClose}
      >
        <ul>{this.renderList()}</ul>
        <p onClick={() => this.handleClick('')} className="modal-list">
          Nope, I will type it manually.
        </p>
      </Dialog>
    );
  }
}

export { SelectedModal };
