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
import TeamInvitation from './components/TeamInvitation';
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
      />
      <AuthenticatedRoute
        exact
        path="/pick"
        component={RestaurantList}
        props={childProps}
      />
      <AuthenticatedRoute
        exact
        path="/new"
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
        path="/teams/joined"
        component={JoinedTeams}
        props={childProps}
      />
      <AuthenticatedRoute
        path="/teams/my"
        component={MyTeams}
        props={childProps}
      />
      <AuthenticatedRoute
        path="/teams/invite"
        component={TeamInvitation}
        props={childProps}
      />
      <AuthenticatedRoute
        path="/members/:teamId/"
        component={TeamMembers}
        props={childProps}
      />
      <AuthenticatedRoute
        path="/teams/new/"
        component={TeamDetails}
        props={childProps}
      />
      <AuthenticatedRoute
        path="/teams/:teamId/"
        component={TeamDetails}
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
