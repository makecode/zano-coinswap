import React from 'react';

import classnames from 'classnames';

import { MENU_ITEMS } from '../../../framework/constants/app';

const Nav = () => {
  return(
    <nav className='navigation'>
      {MENU_ITEMS.map((item, index) => (
        <a
          className={classnames('navigation__link', { 'disabled': item.disabled })}
          href={item.link}
          key={index}>
            {item.title}
        </a>
      ))}
    </nav>
  )
};

export default Nav;
