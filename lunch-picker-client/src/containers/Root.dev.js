import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import Routes from '../Routes';
import DevTools from './DevTools';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Fragment>
          <Routes />
          <DevTools />
        </Fragment>
      </Provider>
    );
  }
}
