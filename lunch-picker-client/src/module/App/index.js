import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { customTheme } from "./theme";

const muiTheme = getMuiTheme(customTheme);

class App extends Component {
  componentDidMount = () => {};

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="container">{this.props.children}</div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(connect(null, {})(App));
