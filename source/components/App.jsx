import React, { useState, useEffect } from 'react';

import { Loader, Header, Footer, Hero, Chart, How, Faq } from './index';
import { request } from '../framework/utils';

import { API_GET_TEXTS } from '../framework/constants/api';

import './../styles/index.sass';

const App = () => {
  const [ texts, setTexts ] = useState({});
  const [ loading, setLoading  ] = useState(true);

  useEffect(() => {
    request(API_GET_TEXTS)
      .then((res) => {
        setTexts(res);
        setLoading(false);
      });
  }, []);

  const renderLoader = () => (
    <div className='loader-container'>
      <Loader />
    </div>
  );

  const renderContent = () => (
    <React.Fragment>
      <Hero txt={texts} />
      <Chart txt={texts} />
      <How txt={texts} />
      <Faq txt={texts} />
    </React.Fragment>
  );

  return (
    <div className='App'>
      <Header />
      { loading ? renderLoader() : renderContent() }
      <Footer />
    </div>
  )
};

export default App;
