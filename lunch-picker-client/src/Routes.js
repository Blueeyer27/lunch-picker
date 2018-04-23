import React from 'react';
import { Switch } from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './components/Login';
import AuthenticatedRoute from './components/App/components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/App/components/UnauthenticatedRoute';

const Routes = ({ childProps }) => {
  return (
    <Switch>
      <UnauthenticatedRoute
        exact
        path="/"
        component={Home}
        props={childProps}
      />
      <UnauthenticatedRoute
        path="/login"
        component={LoginPage}
        props={childProps}
      />
    </Switch>
  );
};

export default Routes;
