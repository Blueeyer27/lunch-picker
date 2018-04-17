import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from '../Routes';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
