import React from 'react';
import { CircularProgress } from 'material-ui';
import { Overlay } from './Overlay';
const styles = {
  spinnerStyle: {
    position: 'fixed',
    left: '50%',
    top: '50%',
    marginLeft: '-33px',
    marginTop: '-33px'
  },
  spinnerColor: '#ed135d'
};

const Spinner = props => {
  return props.spinning ? (
    <Overlay>
      <CircularProgress
        size={66}
        thickness={5}
        style={styles.spinnerStyle}
        color={styles.spinnerColor}
      />
    </Overlay>
  ) : null;
};

export { Spinner };
