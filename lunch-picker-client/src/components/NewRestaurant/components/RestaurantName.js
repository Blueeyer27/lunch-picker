import React from 'react';
import { Input } from '../../Share';

export const RestaurantName = props => {
  const { value, onChange } = props;
  return (
    <Input
      placeholder="Restaurant Name"
      fullWidth={true}
      value={value}
      onChange={onChange}
    />
  );
};
