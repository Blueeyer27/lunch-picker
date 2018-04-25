import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ImageUpload, ImageInfo, SelectedModal } from './components';
import { Button } from '../Share';
import { newRestaurantSelector } from '../../selectors';
import {
  detectTextInLogo,
  searchByName,
  getDetailById,
  toggleDetectedNameModal
} from '../../actions';
import './styles/home.css';

class NewRestaurant extends Component {
  selectRestaurantName = async name => {
    await this.props.searchByName(name);
    await this.props.getDetailById(this.props.restaurant.searchSummary.id);
    this.props.toggleDetectedNameModal(false);
  };

  handleSave = () => {};

  render() {
    const { detectTextInLogo, restaurant } = this.props;
    return (
      <div className="wrapper">
        <ImageUpload detectTextInLogo={detectTextInLogo} />
        <ImageInfo restaurant={restaurant.onlineDetail} />
        <SelectedModal
          open={this.props.isDetectedNameModalOpen}
          onSelect={this.selectRestaurantName}
          names={restaurant.detectedResults}
        />
        <Button label="Save" disabled={false} onClick={this.handleSave} />
      </div>
    );
  }
}

export default connect(newRestaurantSelector, {
  detectTextInLogo,
  searchByName,
  getDetailById,
  toggleDetectedNameModal
})(NewRestaurant);
