import React from 'react';
import Logo from '../../../assets/image/logo.svg';

import '../styles/logo.css';

export default props => {
  return (
    <div className="logo-container">
      <img src={Logo} className="logo" alt="logo" />
    </div>
  );
};
