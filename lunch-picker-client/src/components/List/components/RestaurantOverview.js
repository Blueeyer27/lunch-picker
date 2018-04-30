import React from 'react';
import { Button } from '../../Share';

export const RestaurantOverview = ({ restaurant, onEditClick }) => {
  return (
    <div className="restaurant-item">
      <div className="restaurant-item-left">
        <img
          src={restaurant.imageSrc}
          alt={restaurant.restaurantName}
          className="restaurant-item-image"
        />
      </div>
      <div className="restaurant-item-middle">
        <h3 className="restaurant-item-name">{restaurant.restaurantName}</h3>
      </div>
      <div className="restaurant-item-right">
        <Button
          label="Edit"
          primary={true}
          onClick={() => onEditClick(restaurant.restaurantId)}
          className="restaurant-item-button"
          fullWidth={false}
        />
      </div>
    </div>
  );
};
