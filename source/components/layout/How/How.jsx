import React from 'react';

import { Title, Steps } from './../../index';

const How = ({ txt }) => {

  return (
    <section className='section how'>
      <div className='section-wrap container'>
        <div className='section-left'>
          <Title title={txt.sectionHow.title} shadow={txt.sectionHow.titleShadow} centred />
          <p className='section-text'>{txt.sectionHow.description}</p>
        </div>
        <div className='section-right'>
          <Steps steps={txt.sectionHow.steps} />
        </div>
      </div>
    </section>
  )
};

export default How;
