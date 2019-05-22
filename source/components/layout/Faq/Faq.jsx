import React from 'react';

import { Title, Questions } from './../../index';
import { TITLES, QUESTIONS } from '../../../../source/framework/constants/app';

class Faq extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeQuestion: 0
    }
  }

  changeActiveQuestion = (activeQuestion) => this.setState(() => ({
    activeQuestion
  }));

  render() {
    const { activeQuestion } = this.state;

    const questionProps = {
      questions: QUESTIONS,
      active: activeQuestion,
      onClick: this.changeActiveQuestion
    };

    return (
      <section className='section faq container'>
        <Title title={TITLES.faq} shadow='Faq' centred />
        <Questions {...questionProps} />
      </section>
    )
  }
};

export default Faq;
