import React, { Component } from 'react';
import { Loader, Header, Footer, Hero, Chart, How, Faq } from './index';

import './../styles/index.sass';
import {API_GET_TEXTS} from "../framework/constants/api";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      txt: {}
    }
  }

  componentDidMount() {
    fetch(API_GET_TEXTS)
      .then((res) => res.json())
      .then((res) => {
        this.setState(() => ({ txt: res }));
        console.log(res);
        this.setState(() => ({ isLoading: false }));
      })
      .catch((error) => {
        throw new Error(error);
      })
  }

  renderContent = () => {
    const { txt } = this.state;

    return (
      <React.Fragment>
        <Hero txt={txt} />
        <Chart txt={txt} />
        <How txt={txt} />
        <Faq txt={txt} />
      </React.Fragment>
    );
  };

  renderLoader = () => (
    <div className='loader-container'>
      <Loader />
    </div>
  );

  render() {
    return (
      <div className='App'>
        <Header />
        { this.state.isLoading ? this.renderLoader() : this.renderContent() }
        <Footer />
      </div>
    )
  }
}

export default App;
