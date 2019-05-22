import React from 'react';

const Logo = () => {
  return (
    <a className='logo' href="/">
      <img className='logo__image' src="static/images/logo.svg" alt="Zano"/>
      <span className='logo__text'>Zano</span>
    </a>
  );
};

export default Logo;
