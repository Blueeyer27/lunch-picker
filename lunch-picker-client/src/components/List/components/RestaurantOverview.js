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
          text: <span>Edit</span>,
          onPress: () => onEditClick(restaurant.restaurantId),
          style: {
            backgroundColor: '#26b526',
            color: 'white',
            marginBottom: '0.8rem',
            width: '57px'
          }
        },
        {
          text: <span>Delete</span>,
          onPress: () => onDeleteClick(restaurant.restaurantId),
          style: {
            backgroundColor: 'red',
            color: 'white',
            marginBottom: '0.8rem',
            width: '57px'
          }
        }
      ]}
    >
      <Card flex={true}>
        <div className="restaurant-item-left">
          <img
            src={restaurant.thumbnail}
            alt={restaurant.restaurantName}
            className="restaurant-item-image"
            onError={e => {
              e.target.src = restaurant.imageSrc;
            }}
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
