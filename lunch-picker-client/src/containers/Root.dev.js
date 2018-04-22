import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../components/App';
import DevTools from './DevTools';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Fragment>
          <Router>
            <App />
          </Router>
          <DevTools />
        </Fragment>
      </Provider>
    );
  }
}
