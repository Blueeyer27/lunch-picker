import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export const Button = props => {
  return (
    <RaisedButton
      type={props.type}
      label={props.label}
      primary={props.primary}
      style={props.style}
      className={props.className}
      fullWidth={props.fullWidth}
      onClick={props.onClick}
      disabled={props.disabled}
    />
  );
};

Button.defaultProps = {
  type: 'button',
  label: 'Button',
  fullWidth: false,
  disabled: false,
  primary: false,
  style: {},
  className: null,
  onClick: () => {}
};
