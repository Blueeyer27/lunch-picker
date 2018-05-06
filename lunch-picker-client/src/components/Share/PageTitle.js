import React from 'react';

export const PageTitle = props => {
  return (
    <div className="page-title">
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
};

PageTitle.defaultProps = {
  title: ''
};
