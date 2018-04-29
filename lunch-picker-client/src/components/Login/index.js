import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import { RoundButton } from '../Share';
import { login, signUp, confirmSignUp } from '../../actions';

import './styles/login.less';

class LoginPage extends Component {
  state = {
    signUp: false
  };

  handleFormFlip = () => {
    this.setState({
      signUp: !this.state.signUp
    });
  };

  render() {
    return (
      <div className="login">
        <div className="login-container">
          {this.state.signUp ? (
            <SignUpForm
              onSignUp={this.props.signUp}
              onConfirm={this.props.confirmSignUp}
            />
          ) : (
            <LoginForm onSubmit={this.props.login} />
          )}
          <RoundButton
            className="switch-button"
            onClick={this.handleFormFlip}
          />
        </div>
      </div>
    );
  }
}

export default connect(null, { login, signUp, confirmSignUp })(LoginPage);
