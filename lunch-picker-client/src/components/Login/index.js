import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
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
          <Button
            variant="fab"
            color="primary"
            className="switch-button"
            onClick={this.handleFormFlip}
          >
            <Icon>add</Icon>
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(null, { login, signUp, confirmSignUp })(LoginPage);
