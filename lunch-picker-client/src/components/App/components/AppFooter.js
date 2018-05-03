import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionGroupWork from 'material-ui/svg-icons/action/group-work';
import { pick } from '../../../actions';
import '../styles/app-footer.less';

class AppFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideValue: '/'
    };
  }

  handleChange = value => {
    this.setState({ slideValue: value }, () => {
      this.props.history.push(value);
    });
  };

  render() {
    return (
      <Tabs
        className="app-footer"
        onChange={this.handleChange}
        value={this.state.slideIndex}
      >
        <Tab
          icon={<ActionHome onClick={() => this.props.pick(true)} />}
          value={'/'}
        />
        <Tab icon={<ContentAdd />} value={'/new'} />
        <Tab
          icon={<ActionGroupWork onClick={() => this.props.pick()} />}
          value={'/'}
        />
      </Tabs>
    );
  }
}

export default connect(null, { pick })(AppFooter);
