import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RestaurantOverview } from './components';
import { listRestaurants, pick } from '../../actions';
import { listSelector } from '../../selectors';

class RestaurantList extends Component {
  componentDidMount = () => {
    this.props.listRestaurants();
  };

  handleEditClick = id => {
    this.props.history.push(`/${id}`);
  };

  handlePick = () => {
    const { restaurants, pick } = this.props;
    pick(restaurants);
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
    return this.props.restaurants.map(restaurant => (
      <RestaurantOverview
        restaurant={restaurant}
        key={restaurant.restaurantId}
        onEditClick={this.handleEditClick}
      />
    ));
  };
  render() {
    return (
      <div>
        {this.props.hasPicked
          ? this.renderPickedRestaurantOverview()
          : this.renderReataurantOverviews()}

        <button onClick={this.handlePick}>Pick</button>
      </div>
    );
  }
}

export default connect(listSelector, { listRestaurants, pick })(RestaurantList);
