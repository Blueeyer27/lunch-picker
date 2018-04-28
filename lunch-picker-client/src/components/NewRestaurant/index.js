import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Ratings,
  ImageUpload,
  NewRestaurantInfo,
  SelectedModal,
  SaveCancelButtons
} from './components';
import { Input, Button } from '../Share';
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
  constructor(props) {
    super(props);
    this.state = {
      imageKey: '1524621570606 - logo-grilld.png',
      restaurantName: null
    };
  }
  selectRestaurantName = async () => {
    const name = this.state.restaurantName;

    await this.props.searchByName(name);
    //await this.props.getDetailById(this.props.restaurant.searchSummary.id);
  };

  handleSelectRestaurantName = value => {
    this.props.toggleDetectedNameModal(false);
    this.setState({
      restaurantName: value
    });
  };

  handleUpdateValue = (key, value) => {
    console.log(key, value);
    this.setState({
      [key]: value
    });
  };

  handleSave = () => {};

  handleCancel = () => {
    this.props.resetRestaurantInfo();
  };

  renderRestaurantName = () => {
    if (this.state.restaurantName == null) return null;

    return (
      <div>
        <Input
          placeholder="Restaurant Name"
          value={this.state.restaurantName}
          onChange={value => this.handleUpdateValue('restaurantName', value)}
        />
        <p>** there would be panel for rating in furture. **</p>
        <Button
          label="Search Restaurant Online"
          onClick={this.selectRestaurantName}
        />

        {this.props.restaurant.searchSummary.id != null ? (
          // link to online infomation
          <p />
        ) : null}
      </div>
    );
  };

  render() {
    const { detectTextInLogo, restaurant } = this.props;
    return (
      <div className="wrapper">
        <Ratings />
        <ImageUpload
          detectTextInLogo={detectTextInLogo}
          imageKey={this.state.imageKey}
          handleUpdateImageKey={value =>
            this.handleUpdateValue('imageKey', value)
          }
        />
        <NewRestaurantInfo restaurant={restaurant.onlineDetail} />
        <SelectedModal
          open={this.props.isDetectedNameModalOpen}
          onSelect={this.handleSelectRestaurantName}
          names={restaurant.detectedResults}
        />
        {this.renderRestaurantName()}
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
