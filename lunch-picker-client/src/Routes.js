import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';

const Routes = props => {
  return (
    <Router>
      <App>
        <Switch />
      </App>
    </Router>
  );
};

export default Routes;
