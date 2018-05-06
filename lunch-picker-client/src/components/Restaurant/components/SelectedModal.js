import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';

class SelectedModal extends Component {
  static defaultProps = {
    open: false,
    names: ['grid', 'adagadgasdarasdasdasdasdasdasda'],
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
        className="select-modal"
        open={this.props.open}
        onClose={this.props.handleClose}
      >
        <h3 className="select-modal-title">Are these restaurants?</h3>
        <ul>{this.renderList()}</ul>
        <p onClick={() => this.handleClick('')} className="modal-list">
          Nope, I will type it manually.
        </p>
      </Dialog>
    );
  }
}

export { SelectedModal };
