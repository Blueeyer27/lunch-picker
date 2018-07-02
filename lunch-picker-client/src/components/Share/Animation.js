import React from 'react';
import { CSSTransition } from 'react-transition-group';

import '../../assets/style/animation.less';

const ScaleAnimation = ({ children, ...props }) => (
  <CSSTransition
    in={true}
    timeout={50000}
    classNames="scale"
    unmountOnExit
    onExited={() => {}}
  >
    {children}
  </CSSTransition>
);
export { ScaleAnimation };
