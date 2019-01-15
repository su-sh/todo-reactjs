import React from 'react';

import logo from '../assets/logo.png';

/**
 * Renders Header.
 *
 *  @returns {*}.
 */
const Header = () => {
  return (
    <div className="logo_title">
      <div className="logo">
        <h1>
          <img alt="logo" title="Logo" src={logo} />
        </h1>
      </div>
      <div className="title">TO-DO</div>
    </div>
  );
};

export default Header;
