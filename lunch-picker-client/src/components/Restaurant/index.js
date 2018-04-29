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
import { detailSelector } from '../../selectors';
import {
  add,
  get,
  update,
  detectTextInLogo,
  searchByName,
  getDetailById,
  toggleDetectedNameModal,
  resetRestaurantInfo,
  updateField,
  uploadProfileImage
} from '../../actions';
import './styles/new-restaurant.less';

class NewRestaurant extends Component {
  componentDidMount = () => {
    const { restaurantId } = this.props.match.params;
    if (restaurantId) {
      this.props.get(restaurantId);
    }
  };
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
    const { details, add, update } = this.props;
    if (!details.restaurantId) {
      add(details);
    } else {
      update(details);
    }
  };

  handleCancel = () => {
    this.props.resetRestaurantInfo();
    this.props.history.push('/');
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
      <div className="restaurant-detail">
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

export default connect(detailSelector, {
  get,
  add,
  update,
  detectTextInLogo,
  searchByName,
  getDetailById,
  toggleDetectedNameModal,
  resetRestaurantInfo,
  updateField,
  uploadProfileImage
})(NewRestaurant);
