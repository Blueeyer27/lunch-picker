import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RestaurantOverview } from './components';
import { listRestaurants, pick } from '../../actions';
import { listSelector } from '../../selectors';

import './styles/list.less';

class RestaurantList extends Component {
  componentDidMount = () => {
    //this.props.listRestaurants();
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
    var restaurants = [
      {
        restaurantName: 'Grilled Grilled Grilled Grilled Grilled',
        restaurantId: '1',
        imageSrc: 'http://via.placeholder.com/400x300'
      },
      {
        restaurantName: 'Grilled',
        restaurantId: '2',
        imageSrc: 'http://via.placeholder.com/400x300'
      },
      {
        restaurantName: 'Grilled',
        restaurantId: '3',
        imageSrc: 'http://via.placeholder.com/400x300'
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
      <div className="margin-top-1rem">
        {this.props.hasPicked
          ? this.renderPickedRestaurantOverview()
          : this.renderReataurantOverviews()}

        <button onClick={this.handlePick}>Pick</button>
      </div>
    );
  }
}

export default connect(listSelector, { listRestaurants, pick })(RestaurantList);
