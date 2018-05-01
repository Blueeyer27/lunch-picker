import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Auth } from 'aws-amplify';
import { Spinner } from '../Share';
import AppBoundary from './components/AppBoundary';
import AppHeader from './components/AppHeader';
import Routes from '../../Routes';
import { customTheme } from './theme';
import { appSelector } from '../../selectors';
import { clear, authenticateUser, signOut } from '../../actions';

const muiTheme = getMuiTheme(customTheme);

const options = {
  position: 'top center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
};

class App extends Component {
  componentDidMount = async () => {
    try {
      const currentUser = await Auth.currentSession();
      if (currentUser) {
        this.props.authenticateUser(currentUser.idToken.payload.email);
      }
    } catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  };

  handleSignOut = async () => {
    await this.props.signOut();
    this.props.history.push('/login');
  };

  render() {
    const { success, error, loading, clear, authenticated } = this.props;
    const childProps = {
      authenticated
    };
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AlertProvider template={AlertTemplate} {...options}>
          <AppBoundary success={success} error={error} onClose={clear}>
            <Spinner spinning={loading} />
            <AppHeader onSignOut={this.handleSignOut} />
            <div className="container">
              <Routes childProps={childProps} />
            </div>
          </AppBoundary>
        </AlertProvider>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(
  connect(appSelector, { clear, authenticateUser, signOut })(App)
);
