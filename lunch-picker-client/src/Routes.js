import React from 'react';
import { Switch } from 'react-router-dom';
import NewRestaurant from './components/NewRestaurant';
import LoginPage from './components/Login';
import OnlineInfomation from './components/OnlineInfomation';
import AuthenticatedRoute from './components/App/components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/App/components/UnauthenticatedRoute';

const Routes = ({ childProps }) => {
  return (
    <Switch>
      <AuthenticatedRoute
        exact
        path="/"
        component={NewRestaurant}
        props={childProps}
      />
      <AuthenticatedRoute
        path="/new"
        component={NewRestaurant}
        props={childProps}
      />
      <AuthenticatedRoute
        path="/onlineInfo/:id"
        component={OnlineInfomation}
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
