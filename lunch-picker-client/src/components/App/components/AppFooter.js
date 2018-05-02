import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionGroupWork from 'material-ui/svg-icons/action/group-work';
import '../styles/app-footer.less';

export default class AppFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideValue: '/'
    };
  }

  handleChange = value => {
    this.props.history.push(value);
    this.setState({
      slideValue: value
    });
  };

  render() {
    return (
      <Tabs
        className="app-footer"
        onChange={this.handleChange}
        value={this.state.slideIndex}
      >
        <Tab icon={<ActionHome />} value={'/'} />
        <Tab icon={<ContentAdd />} value={'/new'} />
        <Tab icon={<ActionGroupWork />} value={'/pick'} />
      </Tabs>
    );
  }
}
