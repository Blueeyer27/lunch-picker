import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CircularProgress from 'material-ui/CircularProgress';
import AppBoundary from './components/AppBoundary';
import { customTheme } from './theme';
import { appSelector } from '../../selectors';

const muiTheme = getMuiTheme(customTheme);

class App extends Component {
  componentDidMount = () => {};

  render() {
    const { error, loading } = this.props;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="container">{this.props.children}</div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(connect(appSelector, {})(App));
