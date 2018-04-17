import React from "react";
import RaisedButton from "material-ui/RaisedButton";

export const Button = props => {
  return (
    <RaisedButton
      label={props.label}
      style={props.style}
      fullWidth={props.fullWidth}
      onClick={props.onClick}
      disabled={props.disabled}
    />
  );
};

Button.defaultProps = {
  label: "Button",
  fullWidth: false,
  disabled: false,
  style: {},
  onClick: () => {}
};
