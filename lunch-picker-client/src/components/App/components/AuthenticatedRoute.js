import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

export default ({ component: C, props: cProps, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        cProps.authenticated ? (
          [
            <AppHeader key="header" onSignOut={rest.onSignOut} />,
            <C key="body" {...props} {...cProps} />,
            <AppFooter key="footer" {...props} {...cProps} />
          ]
        ) : (
          <Redirect
            to={`/login?redirect=${props.location.pathname}${
              props.location.search
            }`}
          />
        )
      }
    />
  );
};
