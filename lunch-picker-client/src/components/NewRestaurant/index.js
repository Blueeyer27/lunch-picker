import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ImageUpload,
  NewRestaurantInfo,
  SelectedModal,
  SaveCancelButtons
} from './components';
import { newRestaurantSelector } from '../../selectors';
import {
  detectTextInLogo,
  searchByName,
  getDetailById,
  toggleDetectedNameModal,
  resetRestaurantInfo
} from '../../actions';
import './styles/new-restaurant.css';

class NewRestaurant extends Component {
  selectRestaurantName = async name => {
    this.props.toggleDetectedNameModal(false);
    await this.props.searchByName(name);
    await this.props.getDetailById(this.props.restaurant.searchSummary.id);
  };

  handleSave = () => {};

  handleCancel = () => {
    this.props.resetRestaurantInfo();
  };

  render() {
    const { detectTextInLogo, restaurant } = this.props;
    return (
      <div className="wrapper">
        <ImageUpload detectTextInLogo={detectTextInLogo} />
        <NewRestaurantInfo restaurant={restaurant.onlineDetail} />
        <SelectedModal
          open={this.props.isDetectedNameModalOpen}
          onSelect={this.selectRestaurantName}
          names={restaurant.detectedResults}
        />
        <SaveCancelButtons
          show={restaurant.onlineDetail.name != null}
          handleSave={this.handleSave}
          handleCancel={this.handleCancel}
        />
      </div>
    );
  }
}

export default connect(newRestaurantSelector, {
  detectTextInLogo,
  searchByName,
  getDetailById,
  toggleDetectedNameModal,
  resetRestaurantInfo
})(NewRestaurant);
