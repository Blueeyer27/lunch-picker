import React, { Fragment } from 'react';
import { Emoji } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

const SIZE = '1.5rem';

const RATES = {
  1: <Emoji set="apple" emoji=":triumph:" size={SIZE} />,
  2: <Emoji set="apple" emoji=":slightly_frowning_face:" size={SIZE} />,
  3: <Emoji set="apple" emoji=":neutral_face:" size={SIZE} />,
  4: <Emoji set="apple" emoji=":grinning:" size={SIZE} />,
  5: <Emoji set="apple" emoji=":heart_eyes:" size={SIZE} />
};

export const Ratings = props => {
  return (
    <Fragment>
      {props.value ? (
        <li onClick={() => props.onClick(null)}>{RATES[props.value]}</li>
      ) : (
        Object.keys(RATES).map(rating => (
          <li key={rating} onClick={() => props.onClick(rating)}>
            {RATES[rating]}
          </li>
        ))
      )}
    </Fragment>
  );
};
