import React, { Fragment } from 'react';
import { RateEmoji } from '../../Share';

export const Ratings = props => {
  return (
    <Fragment>
      {props.value ? (
        <li onClick={() => props.onClick(null)}>
          <RateEmoji rate={props.value} />
        </li>
      ) : (
        [1, 2, 3, 4, 5].map(rating => (
          <li key={rating} onClick={() => props.onClick(rating)}>
            <RateEmoji rate={rating} />
          </li>
        ))
      )}
    </Fragment>
  );
};
