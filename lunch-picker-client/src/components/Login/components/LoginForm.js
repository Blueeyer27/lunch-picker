import React, { Component } from 'react';
import { withAlert } from 'react-alert';
import { Input } from '../../Share';
import Button from 'material-ui/Button';
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
          value={this.state.username}
          placeholder="Username"
          fullWidth={true}
          onChange={value => this.handleChange(value, 'username')}
        />
        <Input
          value={this.state.password}
          placeholder="Password"
          type="password"
          fullWidth={true}
          onChange={value => this.handleChange(value, 'password')}
        />
        <div className="login-btn-container">
          <Button variant="raised" type="submit" color="primary">
            Login
          </Button>
        </div>
      </form>
    );
  }
}

export default withAlert(LoginForm);
