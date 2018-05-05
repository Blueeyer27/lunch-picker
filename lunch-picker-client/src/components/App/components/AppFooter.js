import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs, { Tab } from 'material-ui/Tabs';
import Icon from 'material-ui/Icon';
import { pick } from '../../../actions';
import '../styles/app-footer.less';
import { CostExplorer } from 'aws-sdk/clients/all';

class AppFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideValue: '/'
    };
  }

  handleChange = value => {
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
        onChange={this.handleChange}
        value={this.state.slideIndex}
        fullWidth
        textColor="primary"
      >
        <Tab
          icon={<Icon>arrow_back</Icon>}
          value={null}
          onActive={() => {
            this.props.history.goBack();
          }}
        />
        <Tab
          icon={<Icon>home</Icon>}
          value={'/'}
          onActive={() => {
            this.props.pick(true);
          }}
        />
        <Tab
          icon={<Icon>group_work</Icon>}
          value={'/'}
          onActive={() => this.props.pick()}
        />
      </Tabs>
    );
  }
}

export default connect(null, { pick })(AppFooter);
