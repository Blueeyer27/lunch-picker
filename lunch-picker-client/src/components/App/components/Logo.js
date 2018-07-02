import React from 'react';
import Logo from '../../../assets/image/logo.svg';

import '../styles/logo.less';

export default props => {
  return (
    <div className="logo-container">
      <img src={Logo} className="logo" alt="logo" />
    </div>
  );
};
