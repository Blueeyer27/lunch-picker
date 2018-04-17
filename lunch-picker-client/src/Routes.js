import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import App from "./module/App";
import LoginPage from "./module/Login";

const Routes = props => {
  return (
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </App>
    </Router>
  );
};

export default Routes;
