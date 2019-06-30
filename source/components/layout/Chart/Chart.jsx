import React from 'react';
import dayjs from 'dayjs';

import { Title, LineChart } from '../../index';
import { API_GET_CHART_DATA } from '../../../framework/constants/api';

const texts = {
  counterTotal: {
    counter: '13827203'
  },
  periodCurrent: {
    monthFirst: {
      title: 'June',
      day: 30
    },
    monthSecond: {
      title: 'July',
      day: 30
    },
    ratio: {
      bbr: 1,
      zan: 1
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


        this.setState(() => ({
          data: transformedData,
          isLoading: false
        }));
      })
      .finally(() => {
        this.setState(() => ({
          isLoading: false
        }));
      });
  };

  render() {
    const { txt } = this.props;
    const { data, isLoading } = this.state;

    const isAlreadySwapped = data.length ? data[data.length - 1].value : 0;

    const lineChartProps = {
      data,
      isLoading,
      width: 1140,
      height: 450,
      margin: 20
    };

    return (
      <section className='section visualization container'>
        <div className='titles'>
          <div className='left'>
            <Title title={ txt.sectionChart.total.title} shadow={ txt.sectionChart.total.titleShadow } shadowAlign='left' small />
            <div className='count'><span>{texts.counterTotal.counter}</span><span className='text-blue'> BBR</span></div>
          </div>
          <div className='right'>
            <Title title={ txt.sectionChart.done.title } shadow={ txt.sectionChart.done.titleShadow } shadowAlign='right' small={true} />
            <div className='count'><span>{isAlreadySwapped}</span><span className='text-blue'> BBR</span></div>
          </div>
        </div>

        <div className='chart'>
          <LineChart {...lineChartProps} />
        </div>

        <div className='periods'>
          <div className='period current'>
            <div className='period__data'>
              <p className='period__value'>
                <span>{ texts.periodCurrent.monthFirst.title } </span>
                <span className='period__num'>{ texts.periodCurrent.monthFirst.day }<sup>th</sup></span>
                <span> – { texts.periodCurrent.monthSecond.title } </span>
                <span className='period__num'>{ texts.periodCurrent.monthSecond.day }<sup>th</sup></span>
              </p>

              <p className='period__value'>
                <span>Swap Ratio: </span>
                <span className='period__num'>{ texts.periodCurrent.ratio.bbr }</span>
                <span> BBR = </span>
                <span className='period__num'>{ texts.periodCurrent.ratio.zan }</span>
                <span> ZANO</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Chart;
