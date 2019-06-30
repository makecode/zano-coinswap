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
        <DropDown  className='hero-button' items={DROPDOWN_ITEMS}>
          <span>{txt.sectionHero.buttonOne}</span>
          <Icon title='triangle' />
        </DropDown>
        {/*<Button class='hero-button'>Stats</Button>*/}
        <Button className='hero-button'>
          <a href='#how'>
            {txt.sectionHero.buttonTwo}
          </a>
        </Button>
        <Countdown />
      </div>
    </section>
  )
};

export default Hero;
