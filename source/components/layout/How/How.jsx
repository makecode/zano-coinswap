import React from 'react';

import { Title, Steps } from './../../index';
import { TITLES, STEPS } from '../../../../source/framework/constants/app';

const description = 'Every Boolberry holder is invited to participate. It can be done with either the Boolberry wallet or the exchange wallet; simply follow the steps described on the cards to the left. Swapped coins will no longer exist in the Boolberry network and this action is irreversible.';

const How = () => {
  return (
    <section className='section how'>
      <div className='section-wrap container'>
        <div className='section-left'>
          <Title title={TITLES.how} shadow='How' centred />
          <p className='section-text'>{description}</p>
        </div>
        <div className='section-right'>
          <Steps steps={STEPS} />
        </div>
      </div>
    </section>
  )
};

export default How;
