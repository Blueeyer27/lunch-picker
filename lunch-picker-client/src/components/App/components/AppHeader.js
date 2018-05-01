import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Button } from '../../Share';
import '../styles/app-bar.less';

export default class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  handleSignOut = () => {
    this.setState({ open: false });
    this.props.onSignOut();
  };

  render() {
    return (
      <div>
        <AppBar
          title={<h2 className="app-bar-title">Lunch Picker</h2>}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={this.handleToggle}
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
            <Button onClick={this.handleSignOut} label="Sign Out" />
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}