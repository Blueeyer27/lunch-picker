import React from 'react';
import { Emoji } from 'emoji-mart';

const SIZE = '2rem';

const RATES = [
  ':triumph:',
  ':slightly_frowning_face:',
  ':neutral_face:',
  ':grinning:',
  ':heart_eyes:'
];

export const RateEmoji = props => {
  return <Emoji set="apple" emoji={RATES[props.rate - 1]} size={SIZE} />;
};

RateEmoji.defaultProps = {
  rate: 1
};
