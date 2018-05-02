import React from 'react';
import { Switch } from 'react-router-dom';
import RestaurantList from './components/List';
import Restaurant from './components/Restaurant';
import LoginPage from './components/Login';
import OnlineInfomation from './components/OnlineInfomation';
import JoinedTeams from './components/JoinedTeams';
import TeamMembers from './components/TeamMembers';
import MyTeams from './components/MyTeams';
import TeamDetails from './components/TeamDetails';
import AuthenticatedRoute from './components/App/components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/App/components/UnauthenticatedRoute';

const Routes = ({ childProps, onSignOut }) => {
  return (
    <Switch>
      <AuthenticatedRoute
        exact
        path="/"
        component={RestaurantList}
        props={childProps}
        onSignOut={onSignOut}
      />
      <AuthenticatedRoute
        exact
        path="/pick"
        component={RestaurantList}
        props={childProps}
        onSignOut={onSignOut}
      />
      <AuthenticatedRoute
        exact
        path="/new"
        component={Restaurant}
        props={childProps}
        onSignOut={onSignOut}
      />
      <AuthenticatedRoute
        path="/onlineInfo/:id"
        component={OnlineInfomation}
        props={childProps}
        onSignOut={onSignOut}
      />
      <UnauthenticatedRoute
        path="/login"
        component={LoginPage}
        props={childProps}
      />
      <AuthenticatedRoute
        path="/teams/joined"
        component={JoinedTeams}
        props={childProps}
        onSignOut={onSignOut}
      />
      <AuthenticatedRoute
        path="/teams/my"
        component={MyTeams}
        props={childProps}
        onSignOut={onSignOut}
      />
      <AuthenticatedRoute
        path="/members/:teamId/"
        component={TeamMembers}
        props={childProps}
        onSignOut={onSignOut}
      />
      <AuthenticatedRoute
        path="/teams/new/"
        component={TeamDetails}
        props={childProps}
        onSignOut={onSignOut}
      />
      <AuthenticatedRoute
        path="/teams/:teamId/"
        component={TeamDetails}
        props={childProps}
        onSignOut={onSignOut}
      />
      <AuthenticatedRoute
        path="/:restaurantId/"
        component={Restaurant}
        props={childProps}
        onSignOut={onSignOut}
      />
    </Switch>
  );
};

export default Routes;
