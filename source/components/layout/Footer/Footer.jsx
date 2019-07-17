import React from 'react';

import { Logo, Social, FooterNav } from '../../index';

const Footer = () => {
  return (
    <footer className='footer'>
      <Logo/>
      <FooterNav />
      <Social/>
      <span className="copyright">Copyright © 2019 ZANO.org</span>
    </footer>
  );
};

export default Footer;
