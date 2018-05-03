import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import '../styles/app-header.less';

export default class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  handleGoToHome = () => {
    this.setState({ open: false }, () => {
      this.props.history.push('/');
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
        <AppBar
          title={<h2 className="app-bar-title">Lunch Picker</h2>}
          onLeftIconButtonClick={this.handleToggle}
          iconElementRight={
            <IconButton onClick={this.handleGoToHome}>
              <ContentAdd />
            </IconButton>
          }
          className="app-bar"
        />
        <Drawer
          docked={false}
          width={240}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <AppBar
            title={<h2 className="app-bar-title">Lunch Picker</h2>}
            onLeftIconButtonClick={this.handleToggle}
            className="app-bar"
          />
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
              <ExitToApp />
            </span>
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}
