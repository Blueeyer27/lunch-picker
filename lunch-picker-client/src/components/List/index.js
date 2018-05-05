import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RestaurantOverview } from './components';
import { listRestaurants } from '../../actions';
import { listSelector } from '../../selectors';

import './styles/list.less';

class RestaurantList extends Component {
  componentDidMount = () => {
    this.props.listRestaurants();
  };

  handleEditClick = id => {
    this.props.history.push(`/${id}`);
  };

  renderPickedRestaurantOverview = () => {
    return (
      <RestaurantOverview
        restaurant={this.props.restaurantPicked}
        onEditClick={this.handleEditClick}
      />
    );
  };

  renderReataurantOverviews = () => {
    const restaurants = [
      {
        restaurantId: '1',
        restaurantName: '12312312312314124adafaf',
        imageSrc:
          'https://s3-media4.fl.yelpcdn.com/bphoto/yKI1S4xAf_qMAC2YjvkQjQ/o.jpg'
      },
      {
        restaurantId: '2',
        restaurantName: '12312312312314124adafaf',
        imageSrc:
          'https://s3-media4.fl.yelpcdn.com/bphoto/yKI1S4xAf_qMAC2YjvkQjQ/o.jpg'
      },
      {
        restaurantId: '3',
        restaurantName: '12312312312314124adafaf',
        imageSrc:
          'https://s3-media4.fl.yelpcdn.com/bphoto/yKI1S4xAf_qMAC2YjvkQjQ/o.jpg'
      },
      {
        restaurantId: '4',
        restaurantName: '12312312312314124adafaf',
        imageSrc:
          'https://s3-media4.fl.yelpcdn.com/bphoto/yKI1S4xAf_qMAC2YjvkQjQ/o.jpg'
      },
      {
        restaurantId: '5',
        restaurantName: '12312312312314124adafaf',
        imageSrc:
          'https://s3-media4.fl.yelpcdn.com/bphoto/yKI1S4xAf_qMAC2YjvkQjQ/o.jpg'
      },
      {
        restaurantId: '6',
        restaurantName: '12312312312314124adafaf',
        imageSrc:
          'https://s3-media4.fl.yelpcdn.com/bphoto/yKI1S4xAf_qMAC2YjvkQjQ/o.jpg'
      },
      {
        restaurantId: '7',
        restaurantName: '12312312312314124adafaf',
        imageSrc:
          'https://s3-media4.fl.yelpcdn.com/bphoto/yKI1S4xAf_qMAC2YjvkQjQ/o.jpg'
      }
    ];
    return restaurants.map(restaurant => (
      <RestaurantOverview
        restaurant={restaurant}
        key={restaurant.restaurantId}
        onEditClick={this.handleEditClick}
      />
    ));
  };
  render() {
    return (
      <div className="margin-top-1rem with-footer">
        {this.props.hasPicked
          ? this.renderPickedRestaurantOverview()
          : this.renderReataurantOverviews()}
      </div>
    );
  }
}

export default connect(listSelector, { listRestaurants })(RestaurantList);
