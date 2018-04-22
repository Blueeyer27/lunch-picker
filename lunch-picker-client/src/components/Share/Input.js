import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class Input extends Component {
  static defaultProps = {
    placeholder: '',
    value: '',
    fullWidth: false,
    onChange: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  componentDidMount = () => {
    this.setState({ value: this.props.value });
  };

  handleChange = (e, value) => {
    this.setState({ value });
    this.props.onChange(value);
  };

  render() {
    return (
      <TextField
        type={this.props.type}
        floatingLabelText={this.props.placeholder}
        fullWidth={this.props.fullWidth}
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

export { Input };
