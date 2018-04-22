import React, { Component } from 'react';
import { withAlert } from 'react-alert';
import { Input, Button } from '../../Share';
import Logo from '../../App/components/Logo';

class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  };

  handleLogin = async e => {
    e.preventDefault();
    const { username, password } = this.state;
    await this.props.onSubmit(username, password);
  };

  handleChange = (value, key) => {
    this.setState({
      [key]: value
    });
  };

  render() {
    return (
      <form className="login-form" onSubmit={this.handleLogin}>
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
  }
}

export default withAlert(LoginForm);
