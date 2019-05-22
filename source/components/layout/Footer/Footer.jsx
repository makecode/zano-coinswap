import React from 'react';

import Logo from './../../ui/Logo/Logo';
import Nav from './../../ui/Nav/Nav';
import Social from './../../ui/Social/Social';

const Footer = () => {
  return (
    <footer className='footer'>
      <Logo/>
      <Nav />
      <Social/>
      <span className="copyright">Copyright © 2019 ZANO.org</span>
    </footer>
  );
};

export default Footer;
