import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RestaurantOverview } from './components';
import { listRestaurants } from '../../actions';
import { listSelector } from '../../selectors';

class RestaurantList extends Component {
  componentDidMount = () => {
    this.props.listRestaurants();
  };

  handleEditClick = id => {
    this.props.history.push(`/${id}`);
  };

  render() {
    return (
      <div>
        {this.props.restaurants.map(restaurant => (
          <RestaurantOverview
            restaurant={restaurant}
            key={restaurant.restaurantId}
            onEditClick={this.handleEditClick}
          />
        ))}
      </div>
    );
  }
}

export default connect(listSelector, { listRestaurants })(RestaurantList);
