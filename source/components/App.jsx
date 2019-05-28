import React, { Component } from 'react';
import { Header, Footer, Hero, Chart, How, Faq } from './index';

import './../styles/index.sass';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Header />
        <Hero />
        <Chart />
        <How />
        <Faq />
        <Footer />
      </div>
    )
  }
}

export default App;
