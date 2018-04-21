import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../App/components/Logo';
import { Input, Button } from '../Share';
import { RoundButton } from './component';
import { login } from '../../actions';

import './styles/login.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      signUp: false
    };
  }

  handleChange = (value, key) => {
    this.setState({
      [key]: value
    });
  };

  handleFormFlip = () => {
    this.setState({
      signUp: !this.state.signUp
    });
  };

  login = async e => {
    e.preventDefault();
    const { username, password } = this.state;
    await this.props.login(username, password);
  };

  renderLogin = () => {
    return (
      <form className="login-form" onSubmit={this.login}>
        <Logo />
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
        <div className="login-btn-container">
          <Button type="submit" label="Login" />
        </div>
      </form>
    );
  };

  renderSignUp = () => {
    return (
      <form className="login-form" onSubmit={this.signUp}>
        <Logo />
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
        <Input
          placeholder="Confirm Your Password"
          type="password"
          fullWidth={true}
          onChange={value => this.handleChange(value, 'confirmPassword')}
        />
        <div className="login-btn-container">
          <Button type="submit" label="Sign Up" />
        </div>
      </form>
    );
  };

  render() {
    return (
      <div className="login">
        <div className="login-container">
          {this.state.signUp ? this.renderSignUp() : this.renderLogin()}
          <RoundButton
            className="switch-button"
            onClick={this.handleFormFlip}
          />
        </div>
      </div>
    );
  }
}

export default connect(null, { login })(LoginPage);
