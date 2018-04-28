import React from 'react';

export const RestaurantOverview = ({ restaurant }) => {
  return (
    <div>
      <h3>{restaurant.restaurantName}</h3>
      <img src={restaurant.imageSrc} alt={restaurant.restaurantName} />
    </div>
  );
};
