import React, { Component } from 'react';
import { withAlert } from 'react-alert';
import { Input } from '../../Share';
import Button from 'material-ui/Button';
import Logo from '../../App/components/Logo';

class SignUpForm extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
    confirmCode: '',
    toBeConfirm: false
  };

  handleSignUp = async e => {
    e.preventDefault();

    const { username, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.props.alert.error("Password doesn't match.");
      return;
    }
    await this.props.onSignUp(username, password);
    this.setState({
      toBeConfirm: true
    });
  };

  handleConfirm = async e => {
    e.preventDefault();
    const { confirmCode } = this.state;
    if (!confirmCode) {
      this.props.alert.error('Please enter confirm code.');
      return;
    }
    await this.props.onConfirm(confirmCode);
  };

  handleChange = (value, key) => {
    this.setState({
      [key]: value
    });
  };

  renderSignUpForm = () => {
    return (
      <form className="login-form" onSubmit={this.handleSignUp}>
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
        <Input
          value={this.state.confirmPassword}
          placeholder="Confirm Your Password"
          type="password"
          fullWidth={true}
          onChange={value => this.handleChange(value, 'confirmPassword')}
        />
        <div className="login-btn-container">
          <Button variant="raised" type="submit" color="primary">
            Sign Up
          </Button>
        </div>
      </form>
    );
  };

  renderConfirmForm = () => {
    return (
      <form className="login-form" onSubmit={this.handleSignUp}>
        <Logo />
        <Input
          value={this.state.confirmCode}
          placeholder="Confirm Code"
          fullWidth={true}
          onChange={value => this.handleChange(value, 'confirmCode')}
        />

        <div className="login-btn-container">
          <Button type="submit" color="primary">
            Confirm
          </Button>
        </div>
      </form>
    );
  };

  render() {
    return this.state.toBeConfirm
      ? this.renderConfirmForm()
      : this.renderSignUpForm();
  }
}

export default withAlert(SignUpForm);
