import React from 'react';

export const ItemBlock = props => {
  const { label, render } = props;
  return (
    <div className="item-block">
      {label && <h2>{label}</h2>}
      {render()}
    </div>
  );
};
