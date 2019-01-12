import React from 'react';

import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="logo_title">
      <div className="logo">
        <img alt="logo" src={logo} />
      </div>
      <div className="title">TO-DO</div>
    </div>
  );
};

export default Header;
