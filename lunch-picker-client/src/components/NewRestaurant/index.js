import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Emoji } from 'emoji-mart';
import { ImageUpload, SelectedModal, SaveCancelButtons } from './components';
import { Input } from '../Share';
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
    console.log(value);
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
        <div className="item-block">
          <Input
            placeholder="Name"
            fullWidth={true}
            value={this.state.restaurantName}
            onChange={value => this.handleUpdateValue('restaurantName', value)}
          />
        </div>
        <div className="item-block">
          <h2>Rate this place</h2>
          <ul className="rate-list">
            <li>
              <Emoji set="apple" emoji="scream" size="1.5rem" />
            </li>
            <li>
              <Emoji set="apple" emoji="confused" size="1.5rem" />
            </li>
            <li>
              <Emoji set="apple" emoji="relieved" size="1.5rem" />
            </li>
            <li>
              <Emoji set="apple" emoji="stuck_out_tongue" size="1.5rem" />
            </li>
            <li>
              <Emoji
                set="apple"
                emoji="stuck_out_tongue_closed_eyes"
                size="1.5rem"
              />
            </li>
          </ul>
        </div>
        <p className="link" onClick={this.selectRestaurantName}>
          Search Restaurant Online
        </p>

        {this.props.restaurant.searchSummary.id != null ? (
          // link to online infomation
          <p
            className="link"
            onClick={() => {
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
    const { detectTextInLogo, restaurant } = this.props;
    return (
      <div className="wrapper">
        <ImageUpload
          detectTextInLogo={detectTextInLogo}
          imageKey={this.state.imageKey}
          handleUpdateImageKey={value =>
            this.handleUpdateValue('imageKey', value)
          }
        />
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
