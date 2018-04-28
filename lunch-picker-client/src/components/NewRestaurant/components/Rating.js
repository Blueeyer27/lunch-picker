import React, { Fragment } from 'react';
import { Emoji } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

const SIZE = 32;

const RATES = {
  1: <Emoji emoji=":triumph:" size={SIZE} />,
  2: <Emoji emoji=":slightly_frowning_face:" size={SIZE} />,
  3: <Emoji emoji=":neutral_face:" size={SIZE} />,
  4: <Emoji emoji=":grinning:" size={SIZE} />,
  5: <Emoji emoji=":heart_eyes:" size={SIZE} />
};

export const Ratings = props => {
  return (
    <Fragment>
      {props.rating
        ? RATES[props.rating]
        : Object.keys(RATES).map(rating => RATES[rating])}
    </Fragment>
  );
};
