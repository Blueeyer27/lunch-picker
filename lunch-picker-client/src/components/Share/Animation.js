import React from 'react';
import { CSSTransition } from 'react-transition-group';

import '../../assets/style/animation.css';

const ScaleAnimation = ({ children, ...props }) => (
  <CSSTransition
    in={true}
    timeout={50000}
    classNames="scale"
    unmountOnExit
    onExited={() => {
      console.log('ininin');
    }}
  >
    {children}
  </CSSTransition>
);
export { ScaleAnimation };
