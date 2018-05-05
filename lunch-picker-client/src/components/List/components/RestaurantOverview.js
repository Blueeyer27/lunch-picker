import React from 'react';
import Button from 'material-ui/Button';
import { RateEmoji, Card } from '../../Share';

export const RestaurantOverview = ({ restaurant, onEditClick }) => {
  return (
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
      <div className="restaurant-item-right">
        <Button
          variant="raised"
          color="primary"
          onClick={() => onEditClick(restaurant.restaurantId)}
          className="restaurant-item-button"
        >
          Edit
        </Button>
      </div>
    </Card>
  );
};
