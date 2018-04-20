import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from './components';
import { login } from '../../actions';
import Logo from '../../assets/image/logo.svg';

import './styles/login.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (value, key) => {
    this.setState({
      [key]: value
    });
  };

  login = async () => {
    const { username, password } = this.state;
    await this.props.login(username, password);
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
            onChange={value => this.handleChange(value, 'username')}
          />
          <Input
            placeholder="Password"
            type="password"
            fullWidth={true}
            onChange={value => this.handleChange(value, 'password')}
          />
        </div>
        <div className="login-btn-container">
          <Button onClick={this.login} label="Login" />
        </div>
      </div>
    );
  }
}

export default connect(null, { login })(LoginPage);
