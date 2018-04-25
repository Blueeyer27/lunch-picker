import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './components/Login';
import Chat from './components/Chat';
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
      <Route path="/chat" component={Chat} />
    </Switch>
  );
};

export default Routes;
