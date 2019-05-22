import React from 'react';

import classnames from 'classnames';

import Logo from '../../ui/Logo/Logo';
import Nav from '../../ui/Nav/Nav';
import Social from '../../ui/Social/Social';

const Header = () => {
  return(
    <header className='header' id="header">
      <div className={classnames('header__wrap', 'container')}>
        <div className='header__left'>
          <Logo />
        </div>
        <div className='header__center'>
          <Nav />
        </div>
        <div className='header__right'>
          <Social />
        </div>
      </div>
    </header>
  )
};

export default Header;
