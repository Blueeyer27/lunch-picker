import React from 'react';
import { Switch } from 'react-router-dom';
import Restaurant from './components/Restaurant';
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
        component={Restaurant}
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
      <AuthenticatedRoute
        path="/:restaurantId/"
        component={Restaurant}
        props={childProps}
      />
    </Switch>
  );
};

export default Routes;
