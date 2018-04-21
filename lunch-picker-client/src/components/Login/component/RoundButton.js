import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export const RoundButton = props => {
  return (
    <FloatingActionButton
      className={props.className}
      mini={props.mini}
      style={props.style}
      onClick={props.onClick}
    >
      <ContentAdd />
    </FloatingActionButton>
  );
};

RoundButton.defaultProps = {
  className: '',
  mini: false,
  style: {},
  onClick: () => {}
};
