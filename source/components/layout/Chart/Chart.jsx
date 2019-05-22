import React from 'react';

import { Title } from '../../index';

const data = {
  counterTotal: {
    text: [{ title: 'Total' }],
    shadow: 'Total',
    counter: '18,446,744'
  },
  counterDone: {
    text: [{ title: 'Coins' }, { title: 'Swapped' }],
    shadow: 'Swapped',
    counter: '0'
  },
  periodCurrent: {
    title: {
      text: [{ title: 'Now' }],
      shadow: 'Now'
    },
    periodNum: 2,
    monthFirst: {
      title: 'April',
      day: 1
    },
    monthSecond: {
      title: 'May',
      day: 31
    },
    ratio: {
      bbr: 1,
      zan: 50
    }
  },
  periodNext: {
    title: {
      text: [{ title: 'Next' }],
      shadow: 'Next'
    },
    periodNum: 3,
    monthFirst: {
      title: 'July',
      day: 1
    },
    monthSecond: {
      title: 'September',
      day: 31
    },
    ratio: {
      bbr: 1,
      zan: 25
    }
  }
};

const Chart = () => {
  return (
    <section className='section visualization container'>
      <div className='titles'>
        <div className='left'>
          <Title title={ data.counterTotal.text } shadow={ data.counterTotal.shadow } shadowAlign='left' small />
          <div className='count'><span>{data.counterTotal.counter}</span><span className='text-blue'> BBR</span></div>
        </div>
        <div className='right'>
          <Title title={ data.counterDone.text } shadow={ data.counterDone.shadow } shadowAlign='right' small={true} />
          <div className='count'><span>{data.counterDone.counter}</span><span className='text-blue'> BBR</span></div>
        </div>
      </div>

      <div className='chart'>
        <img className='chart__img' src='../../../../static/images/chart.png' alt='Chart' />
      </div>

      <div className="periods">
        <div className="period current">
          <Title title={ data.periodCurrent.title.text } shadow={ data.periodCurrent.title.shadow } shadowAlign='left' small={true} />

          <div className="period__data">
            <p className="period__value">
              <span>Period </span>
              <span className='period__num'>{ data.periodCurrent.periodNum }</span>
            </p>

            <p className="period__value">
              <span>{ data.periodCurrent.monthFirst.title } </span>
              <span className='period__num'>{ data.periodCurrent.monthFirst.day }<sup>st</sup></span>
              <span> – { data.periodCurrent.monthSecond.title } </span>
              <span className="period__num">{ data.periodCurrent.monthSecond.day }<sup>st</sup></span>
            </p>

            <p className="period__value">
              <span>Swap Ratio: </span>
              <span className="period__num">{ data.periodCurrent.ratio.bbr }</span>
              <span> BBR = </span>
              <span className="period__num">{ data.periodCurrent.ratio.zan }</span>
              <span> ZAN</span>
            </p>
          </div>
        </div>

        <div className="period next">
          <Title title={ data.periodNext.title.text } shadow={ data.periodNext.title.shadow } shadowAlign='right' small />

          <div className="period__data">
            <p className="period__value">
              <span>Period </span>
              <span className='period__num'>{ data.periodNext.periodNum }</span>
            </p>

            <p className="period__value">
              <span>{ data.periodNext.monthFirst.title } </span>
              <span className='period__num'>{ data.periodNext.monthFirst.day }<sup>st</sup></span>
              <span> – { data.periodNext.monthSecond.title} </span>
              <span className="period__num">{ data.periodNext.monthSecond.day }<sup>st</sup></span>
            </p>

            <p className="period__value">
              <span>Swap Ratio: </span>
              <span className="period__num">{ data.periodNext.ratio.bbr }</span>
              <span> BBR = </span>
              <span className="period__num">{ data.periodNext.ratio.zan }</span>
              <span> ZAN</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chart;
