import React, { Component } from 'react';
import { connect } from 'react-redux';
import { OnlineDetail } from './components';
import { getDetailById } from '../../actions';
import './styles/online-info.css';

class OnlineInfomation extends Component {
  componentDidMount = () => {
    this.props.getDetailById(this.props.match.params.id);
  };
  render() {
    return (
      <div>
        <OnlineDetail restaurant={this.props.restaurant} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurant: state.restaurant.onlineDetail
  };
};

export default connect(mapStateToProps, { getDetailById })(OnlineInfomation);
