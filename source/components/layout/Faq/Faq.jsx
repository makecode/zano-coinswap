import React from 'react';

import { Title, Questions } from './../../index';


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
    const { txt } = this.props;
    const { activeQuestion } = this.state;

    const questionProps = {
      questions: txt.sectionFaq.questions,
      active: activeQuestion,
      onClick: this.changeActiveQuestion
    };

    return (
      <section className='section faq container'>
        <Title title={txt.sectionFaq.title} shadow={txt.sectionFaq.titleShadow} centred />
        <Questions {...questionProps} />
      </section>
    )
  }
};

export default Faq;
