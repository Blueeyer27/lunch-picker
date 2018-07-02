import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs, { Tab } from 'material-ui/Tabs';
import Icon from 'material-ui/Icon';
import { pick } from '../../../actions';
import '../styles/app-footer.less';

class AppFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideValue: '/'
    };
  }

  handleChange = (e, value) => {
    this.setState({ slideValue: value }, () => {
      if (value != null) {
        this.props.history.push(value);
      }
    });
  };

  render() {
    return (
      <Tabs
        className="app-footer"
        indicatorColor="primary"
        onChange={this.handleChange}
        value={this.state.slideValue}
        fullWidth
        textColor="primary"
      >
        <Tab
          icon={<Icon>arrow_back</Icon>}
          value={null}
          onClick={() => {
            this.props.pick(true);
            this.props.history.goBack();
          }}
        />
        <Tab
          icon={<Icon>home</Icon>}
          value={'/'}
          onClick={() => {
            this.props.pick(true);
          }}
        />
        <Tab
          icon={<Icon>group_work</Icon>}
          value={'/pick'}
          onClick={() => {
            this.props.pick();
          }}
        />
      </Tabs>
    );
  }
}

export default connect(null, { pick })(AppFooter);
