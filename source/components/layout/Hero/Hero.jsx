import React from 'react';

import { Title, Button, Icon, DropDown, Countdown } from './../../index';

import { TITLES } from '../../../../source/framework/constants/app';

const DROPDOWN_ITEMS = [
  { title: 'Github', link: 'https://github.com/hyle-team/zano' }
];

const Hero = () => {
  return (
    <section className='section hero'>
      <Title title={TITLES.hero} shadow='Coinswap' centred />
      <p className='section__text'>
        Boolberry holders can swap their coins for Zano, learn more in the whitepaper and FAQ below.
      </p>
      <div className='buttons'>
        <DropDown  className='hero-button' items={DROPDOWN_ITEMS}>
          <span>Whitepaper</span>
          <Icon title='triangle' />
        </DropDown>
        {/*<Button class='hero-button'>Stats</Button>*/}
        <Button className='hero-button'>Manual</Button>
        <Countdown />
      </div>
    </section>
  )
};

export default Hero;
