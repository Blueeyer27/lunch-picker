import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ItemBlock,
  RestaurantName,
  ImageUpload,
  SelectedModal,
  ActionButtons,
  Ratings,
  OnlineInfoLink
} from './components';
import { newRestaurantSelector } from '../../selectors';
import {
  add,
  detectTextInLogo,
  searchByName,
  getDetailById,
  toggleDetectedNameModal,
  resetRestaurantInfo,
  updateField,
  uploadProfileImage
} from '../../actions';
import './styles/new-restaurant.css';

class NewRestaurant extends Component {
  handleUpload = async file => {
    await this.props.uploadProfileImage(file);
  };

  handleRestaurantNameSelect = value => {
    this.props.toggleDetectedNameModal(false);
    if (value) {
      this.props.updateField('restaurantName', value);
      this.props.searchByName(value);
    }
  };

  handleFieldUpdate = (field, value) => {
    this.props.updateField(field, value);
  };

  handleExternalLinkClick = () => {
    this.props.history.push(`/onlineInfo/${this.props.details.externalId}`);
  };
  handleSave = () => {
    const { details, add } = this.props;
    add(details);
  };

  handleCancel = () => {
    this.props.resetRestaurantInfo();
  };

  renderRestaurantDetails = () => {
    const { details } = this.props;
    return (
      <div>
        <ItemBlock
          render={() => (
            <RestaurantName
              value={details.restaurantName}
              onChange={value =>
                this.handleFieldUpdate('restaurantName', value)
              }
            />
          )}
        />
        <ItemBlock
          label={details.rating ? 'Your rating' : 'Rate this place'}
          render={() => (
            <ul className="rate-list">
              <Ratings
                value={details.rating}
                onClick={rating => {
                  this.handleFieldUpdate('rating', rating);
                }}
              />
            </ul>
          )}
        />

        {this.props.hasOnlineInfo && (
          <OnlineInfoLink onClick={this.handleExternalLinkClick} />
        )}
      </div>
    );
  };

  render() {
    const { detectTextInLogo, restaurant, details } = this.props;
    return (
      <div className="wrapper">
        <ImageUpload
          detectTextInLogo={detectTextInLogo}
          imageKey={details.profileImage}
          imageSrc={details.imageUrl}
          onUpload={this.handleUpload}
        />
        <SelectedModal
          open={this.props.isDetectedNameModalOpen}
          onSelect={this.handleRestaurantNameSelect}
          names={restaurant.detectedResults}
        />
        {this.renderRestaurantDetails()}
        <ActionButtons
          show={details.restaurantName && details.rating}
          onSave={this.handleSave}
          onCancel={this.handleCancel}
        />
      </div>
    );
  }
}

export default connect(newRestaurantSelector, {
  add,
  detectTextInLogo,
  searchByName,
  getDetailById,
  toggleDetectedNameModal,
  resetRestaurantInfo,
  updateField,
  uploadProfileImage
})(NewRestaurant);
