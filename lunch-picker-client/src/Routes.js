import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App';
import LoginPage from './components/Login';
import { Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
  position: 'top center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
};
const Routes = props => {
  return (
    <Router>
      <Provider template={AlertTemplate} {...options}>
        <App>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </App>
      </Provider>
    </Router>
  );
};

export default Routes;
