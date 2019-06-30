import React from 'react';

import { Title, Button, Icon, DropDown, Countdown } from './../../index';

const DROPDOWN_ITEMS = [
  { title: 'Github', link: 'https://github.com/hyle-team/zano' }
];

const Hero = ({ txt }) => {
  return (
    <section className='section hero'>
      <Title title={txt.sectionHero.title} shadow={txt.sectionHero.titleShadow} centred />
      <p className='section__text'>{txt.sectionHero.description}</p>
      <div className='buttons'>
        <Button className='hero-button' blue>
          <a href={txt.sectionHero.buttonOneLink}>
            {txt.sectionHero.buttonOne}
          </a>
        </Button>
        <Button className='hero-button' blue>
          <a href={txt.sectionHero.buttonTwoLink}>
              {txt.sectionHero.buttonTwo}
          </a>
        </Button>
        <Countdown />
      </div>
    </section>
  )
};

export default Hero;
