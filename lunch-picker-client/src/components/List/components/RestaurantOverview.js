import React from 'react';

export const RestaurantOverview = ({ restaurant, onEditClick }) => {
  return (
    <div>
      <h3>{restaurant.restaurantName}</h3>
      <img src={restaurant.imageSrc} alt={restaurant.restaurantName} />
      <button onClick={() => onEditClick(restaurant.restaurantId)}>Edit</button>
    </div>
  );
};
