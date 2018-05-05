import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import { MenuItem } from 'material-ui/Menu';
import Icon from 'material-ui/Icon';
import '../styles/app-header.less';

export default class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  handleAdd = () => {
    this.setState({ open: false }, () => {
      this.props.history.push('/new');
    });
  };

  handleSignOut = () => {
    this.setState({ open: false }, () => {
      this.props.onSignOut();
    });
  };

  render() {
    return (
      <div className="full-width">
        <AppBar position="static" className="app-bar">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              className="app-bar-menu-btn"
              onClick={this.handleToggle}
            >
              <Icon>menu</Icon>
            </IconButton>
            <h2 className="app-bar-title">Lunch Picker</h2>
            <IconButton
              color="inherit"
              onClick={this.handleAdd}
              className="app-bar-right-btn"
            >
              <Icon>add</Icon>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
          className="app-bar-drawer"
        >
          <AppBar position="static" className="app-bar">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Menu"
                className="app-bar-menu-btn"
                onClick={this.handleToggle}
              >
                <Icon>menu</Icon>
              </IconButton>
              <h2 className="app-bar-title">Lunch Picker</h2>
            </Toolbar>
          </AppBar>
          <MenuItem className="app-bar-menu-item">
            <Link to="/" onClick={this.handleClose}>
              Home
            </Link>
          </MenuItem>
          <MenuItem className="app-bar-menu-item">
            <Link to="/new" onClick={this.handleClose}>
              New Restaurant
            </Link>
          </MenuItem>
          <MenuItem className="app-bar-menu-item">
            <Link to="/teams/joined" onClick={this.handleClose}>
              Joined Teams
            </Link>
          </MenuItem>
          <MenuItem className="app-bar-menu-item">
            <Link to="/teams/my" onClick={this.handleClose}>
              My Teams
            </Link>
          </MenuItem>
          <MenuItem className="app-bar-menu-item">
            <span
              className="app-bar-menu-item-icon"
              onClick={this.handleSignOut}
            >
              <Icon>exit_to_app</Icon>
            </span>
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}
