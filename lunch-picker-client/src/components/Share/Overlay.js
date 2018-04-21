import React from 'react';

const styles = {
  overlayStyle: {
    width: '100%',
    height: '100%',
    zIndex: '1029',
    position: 'fixed',
    left: '0',
    top: '0',
    background: 'rgba(0,0,0,0.3)'
  }
};

const Overlay = props => {
  return <div style={styles.overlayStyle}>{props.children}</div>;
};

export { Overlay };
