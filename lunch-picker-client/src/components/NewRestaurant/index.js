import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ItemBlock,
  RestaurantName,
  ImageUpload,
  SelectedModal,
  ActionButtons,
  Ratings
} from './components';
import { newRestaurantSelector } from '../../selectors';
import {
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
    this.props.updateField('restaurantName', value);
    this.props.searchByName(value);
  };

  handleFieldUpdate = (field, value) => {
    console.log(value);
    this.props.updateField(field, value);
  };

  handleSave = () => {};

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

        {this.props.restaurant.searchSummary.id != null ? (
          <p
            className="link"
            onClick={() => {
              // link to online infomation
              this.props.history.push(
                `/onlineInfo/${this.props.restaurant.searchSummary.id}`
              );
            }}
          >
            online details
          </p>
        ) : null}
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
  resetRestaurantInfo,
  updateField,
  uploadProfileImage
})(NewRestaurant);
