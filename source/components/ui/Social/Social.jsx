import React from 'react';

import Icon from '../Icon/Icon';
import { SOCIAL_ICONS } from '../../../framework/constants/app';

const Social = () => {
  return (
    <ul className='social'>
      { SOCIAL_ICONS.map((icon, index) => (
        <li className='social__el' key={index}>
          <a className='social__link' href={icon.link} title={icon.title}>
            <Icon title={icon.title} />
          </a>
        </li>
      )) }
    </ul>
  );
};

export default Social;
