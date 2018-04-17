import React, { Component } from "react";
import TextField from "material-ui/TextField";

class Input extends Component {
  static defaultProps = {
    placeholder: "Floating Label Text",
    value: "",
    fullWidth: false,
    onChange: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  componentDidMount = () => {
    this.setState({ value: this.props.value });
  };

  handleChange = (e, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <TextField
        floatingLabelText={this.props.placeholder}
        fullWidth={this.props.fullWidth}
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

export { Input };
