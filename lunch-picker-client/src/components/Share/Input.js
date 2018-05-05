import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class Input extends Component {
  static defaultProps = {
    placeholder: '',
    value: '',
    fullWidth: false,
    onChange: () => {},
    style: { marginTop: '0.8rem' }
  };

  handleChange = (e, value) => {
    this.props.onChange(value);
  };

  render() {
    return (
      <TextField
        type={this.props.type}
        label={this.props.placeholder}
        fullWidth={this.props.fullWidth}
        value={this.props.value}
        onChange={this.handleChange}
        style={this.props.style}
      />
    );
  }
}

export { Input };
