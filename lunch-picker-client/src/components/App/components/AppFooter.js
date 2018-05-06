import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
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
      >
        <Tab
          icon={<NavigationArrowBack />}
          value={null}
          onActive={() => {
            this.props.history.goBack();
          }}
        />
        <Tab
          icon={<ActionHome />}
          value={'/'}
          onActive={() => {
            this.props.pick(true);
          }}
        />
        <Tab
          icon={<ActionGroupWork onClick={() => this.props.pick()} />}
          value={'/'}
        />
      </Tabs>
    );
  }
}

export default connect(null, { pick })(AppFooter);
