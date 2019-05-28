import React from 'react';

import logo from './../../../media/images/logo.svg';

const Logo = () => {
  return (
    <a className='logo' href="/">
      <img className='logo__image' src={logo} alt="Zano"/>
      <span className='logo__text'>Zano</span>
    </a>
  );
};

export default Logo;
