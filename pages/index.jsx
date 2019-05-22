import React from 'react';

import 'reset-css/reset.css';
import './../source/styles/index.sass';

import { Header, Footer, Hero, Chart, How, Faq } from '../source/components';

const Index = () => {
  return(
    <div className='App'>
      <Header />
      <Hero />
      <Chart />
      <How />
      <Faq />
      <Footer />
    </div>
  );
};

export default Index;
