import React from 'react';
import Swipeout from 'rc-swipeout';
import { RateEmoji, Card } from '../../Share';
import 'rc-swipeout/assets/index.css';

export const RestaurantOverview = ({
  restaurant,
  onEditClick,
  onDeleteClick
}) => {
  return (
    <Swipeout
      autoClose
      right={[
        {
          text: 'Edit',
          onPress: () => onEditClick(restaurant.restaurantId),
          style: { backgroundColor: 'orange', color: 'white' }
        },
        {
          text: 'Delete',
          onPress: () => onDeleteClick(restaurant.restaurantId),
          style: { backgroundColor: 'red', color: 'white' }
        }
      ]}
    >
      <Card flex={true}>
        <div className="restaurant-item-left">
          <img
            src={restaurant.imageSrc}
            alt={restaurant.restaurantName}
            className="restaurant-item-image"
          />
        </div>
        <div className="restaurant-item-middle">
          <h3 className="restaurant-item-name">{restaurant.restaurantName}</h3>
          <p>
            <RateEmoji rate={restaurant.rating} />
          </p>
        </div>
      </Card>
    </Swipeout>
  );
};
