import React from 'react';
import dayjs from 'dayjs';

import { Title, LineChart } from '../../index';
import { API_GET_CHART_DATA } from '../../../framework/constants/api';

const texts = {
  counterTotal: {
    text: [{ title: 'Total' }],
    shadow: 'Total',
    counter: '13827203'
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

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }


  componentDidMount() {
    fetch(API_GET_CHART_DATA)
      .then((res) => res.json())
      .then((res) => {
        const transformedData = res.map(d => ({
          date: dayjs.unix(d.bbr_hourstamp).toDate(),
          value: d.amount_in_bbr
        }));

        this.setState((data) => ({
          data: transformedData,
          isLoading: false
        }));
      })
      .finally(() => {
        this.setState((data) => ({
          isLoading: false
        }));
      });
  };

  render() {
    const { data, isLoading } = this.state;

    const isAlreadySwapped = data.length ? data[data.length - 1].value : 0;

    const lineChartProps = {
      data,
      isLoading,
      width: 1140,
      height: 600,
      margin: 20
    };

    return (
      <section className='section visualization container'>
        <div className='titles'>
          <div className='left'>
            <Title title={ texts.counterTotal.text } shadow={ texts.counterTotal.shadow } shadowAlign='left' small />
            <div className='count'><span>{texts.counterTotal.counter}</span><span className='text-blue'> BBR</span></div>
          </div>
          <div className='right'>
            <Title title={ texts.counterDone.text } shadow={ texts.counterDone.shadow } shadowAlign='right' small={true} />
            <div className='count'><span>{isAlreadySwapped}</span><span className='text-blue'> BBR</span></div>
          </div>
        </div>

        <div className='chart'>
          <LineChart {...lineChartProps} />
        </div>

        <div className='periods'>
          <div className='period current'>
            <Title title={ texts.periodCurrent.title.text } shadow={ texts.periodCurrent.title.shadow } shadowAlign='left' small={true} />

            <div className='period__data'>
              <p className='period__value'>
                <span>Period </span>
                <span className='period__num'>{ texts.periodCurrent.periodNum }</span>
              </p>

              <p className='period__value'>
                <span>{ texts.periodCurrent.monthFirst.title } </span>
                <span className='period__num'>{ texts.periodCurrent.monthFirst.day }<sup>st</sup></span>
                <span> – { texts.periodCurrent.monthSecond.title } </span>
                <span className='period__num'>{ texts.periodCurrent.monthSecond.day }<sup>st</sup></span>
              </p>

              <p className='period__value'>
                <span>Swap Ratio: </span>
                <span className='period__num'>{ texts.periodCurrent.ratio.bbr }</span>
                <span> BBR = </span>
                <span className='period__num'>{ texts.periodCurrent.ratio.zan }</span>
                <span> ZAN</span>
              </p>
            </div>
          </div>

          <div className='period next'>
            <Title title={ texts.periodNext.title.text } shadow={ texts.periodNext.title.shadow } shadowAlign='right' small />

            <div className='period__data'>
              <p className='period__value'>
                <span>Period </span>
                <span className='period__num'>{ texts.periodNext.periodNum }</span>
              </p>

              <p className='period__value'>
                <span>{ texts.periodNext.monthFirst.title } </span>
                <span className='period__num'>{ texts.periodNext.monthFirst.day }<sup>st</sup></span>
                <span> – { texts.periodNext.monthSecond.title} </span>
                <span className='period__num'>{ texts.periodNext.monthSecond.day }<sup>st</sup></span>
              </p>

              <p className='period__value'>
                <span>Swap Ratio: </span>
                <span className='period__num'>{ texts.periodNext.ratio.bbr }</span>
                <span> BBR = </span>
                <span className='period__num'>{ texts.periodNext.ratio.zan }</span>
                <span> ZAN</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Chart;
