import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class Input extends Component {
  static defaultProps = {
    placeholder: '',
    value: '',
    fullWidth: false,
    onChange: () => {},
    style: { marginBottom: '0.5rem', marginTop: '0.5rem' }
  };

  handleChange = e => {
    this.props.onChange(e.target.value);
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
