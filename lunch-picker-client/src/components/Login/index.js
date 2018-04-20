import React, { Component } from 'react';
import { Input, Button } from './component';
import Logo from '../../assets/image/logo.svg';

import './style/login.css';

class LoginPage extends Component {
  static defaultProps = {
    onSubmit: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleClick = () => {
    const { username, password } = this.state;
    this.props.onSubmit(username, password);
  };

  handleChange = (value, key) => {
    this.setState({
      [key]: value
    });
  };

  render() {
    return (
      <div className="login">
        <div className="logo-container">
          <img src={Logo} className="logo" alt="logo" />
        </div>
        <div>
          <Input
            placeholder="Username"
            fullWidth={true}
            value={this.props.userName}
            onChange={value => this.handleChange(value, 'username')}
          />
          <Input
            placeholder="Password"
            fullWidth={true}
            value={this.props.Password}
            onChange={value => this.handleChange(value, 'password')}
          />
        </div>
        <div className="login-btn-container">
          <Button onClick={this.handleClick} label="Login" />
        </div>
      </div>
    );
  }
}

export default LoginPage;
