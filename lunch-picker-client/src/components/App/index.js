import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Spinner } from '../Share';
import AppBoundary from './components/AppBoundary';
import { customTheme } from './theme';
import { appSelector } from '../../selectors';
import { clear } from '../../actions';

const muiTheme = getMuiTheme(customTheme);

class App extends Component {
  componentDidMount = () => {};

  render() {
    const { error, loading, clear } = this.props;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBoundary error={error} onClose={clear}>
          <Spinner spinning={loading} />
          <div className="container">{this.props.children}</div>
        </AppBoundary>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(connect(appSelector, { clear })(App));
