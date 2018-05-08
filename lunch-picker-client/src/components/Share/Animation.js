import React from 'react';
import { CSSTransition } from 'react-transition-group';

import '../../assets/style/animation.less';

const ScaleAnimation = ({ children, ...props }) => {
  return (
    <CSSTransition
      in={props.in}
      timeout={300}
      classNames="scale"
      unmountOnExit
      onExited={() => {}}
    >
      {state => <span>{children}</span>}
    </CSSTransition>
  );
};
export { ScaleAnimation };
