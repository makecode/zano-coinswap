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
      })
      .finally(() => {
        this.setState(() => ({ isLoading: false }));
      })
  }

  renderContent = () => {
    const { txt } = this.state;

    return (
      <React.Fragment>
        <Hero txt={txt} />
        <Chart />
        <How txt={txt} />
        <Faq txt={txt} />
        <Footer />
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
        {/*{ this.renderContent() }*/}
        { this.state.isLoading ? this.renderLoader() : this.renderContent() }
      </div>
    )
  }
}

export default App;
