import React from 'react';

const style = {
  padding: '0.5rem',
  flexDirection: 'row',
  minHeight: '5rem',
  lineHeight: '2rem',
  color: '#555',
  background: '#fff',
  borderRadius: '5px',
  marginBottom: '0.8rem',
  boxShadow: '0 1px 10px 0 #bababa'
};

export const Card = props => {
  const flexstyle = props.flex
    ? { display: 'flex', flexDirection: 'row' }
    : { display: 'block' };
  return <div style={{ ...style, ...flexstyle }}>{props.children}</div>;
};

Card.defaultProps = {
  flex: false
};
