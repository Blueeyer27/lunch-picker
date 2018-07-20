import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RestaurantOverview, CategoryFilter } from './components';
import { listRestaurants, remove } from '../../actions';
import { listSelector, appSelector } from '../../selectors';

import './styles/list.less';

class RestaurantList extends Component {
  componentDidMount = () => {
    this.props.listRestaurants();
  };

  handleEditClick = id => {
    this.props.history.push(`/${id}`);
  };

  handleDeleteClick = async id => {
    const { remove, listRestaurants } = this.props;
    await remove(id);
    listRestaurants();
  };

  renderPickedRestaurantOverview = () => {
    return (
      <RestaurantOverview
        restaurant={this.props.restaurantPicked}
        onEditClick={this.handleEditClick}
        onDeleteClick={this.handleDeleteClick}
      />
    );
  };

  renderReataurantOverviews = () => {
    return this.props.restaurants.map(restaurant => (
      <RestaurantOverview
        restaurant={restaurant}
        key={restaurant.restaurantId}
        onEditClick={this.handleEditClick}
        onDeleteClick={this.handleDeleteClick}
      />
    ));
  };
  render() {
    return (
      <div className="margin-top-1rem with-footer">
        <CategoryFilter open={this.props.isFilterPanelOpen} />
        {this.props.hasPicked
          ? this.renderPickedRestaurantOverview()
          : this.renderReataurantOverviews()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log({
    ...listSelector(state),
    isFilterPanelOpen: state.app.isFilterPanelOpen
  });
  return {
    ...listSelector(state),
    isFilterPanelOpen: state.app.isFilterPanelOpen
  };
};

export default connect(
  mapStateToProps,
  { listRestaurants, remove }
)(RestaurantList);
