import React from 'react';
import _get from 'lodash.get';

import { Title, LineChart, Switcher } from '../../index';
import { API_GET_DATA_ALL, API_GET_DATA_DAY } from '../../../framework/constants/api';
import { getStartEndOfTheDay, transformData } from '../../../framework/utils';

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
      activePeriod: 1,// we have two modes: 0 - day view, 1 - all period view
      chartConfig: {},
      isLoading: true
    };
  }


  componentDidMount() {
    this.fetchChartData();
  };

  fetchChartData = () => {
    const { activePeriod } = this.state;
    const URL = activePeriod === 1 ? API_GET_DATA_ALL : API_GET_DATA_DAY;

    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        const data = activePeriod === 1 ? res : res.dayTransactions;
        const transformedData = transformData(data);
        const chartConfig = {};

        chartConfig.xMax = activePeriod === 1 ? '1564488000' : _get(res, 'currentDay.date', '');
        chartConfig.yMin = activePeriod === 1 ? 0 : _get(res, 'currentDay.bbrSwaped', 0);
        chartConfig.xFormat = activePeriod === 1 ? '%d/%m/%Y' : '%H h';
        chartConfig.xExtent = activePeriod === 1 ? [] : getStartEndOfTheDay();

        this.setState(() => ({
          chartConfig,
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
    const { data, isLoading, activePeriod, chartConfig } = this.state;

    const isAlreadySwapped = data.length ? data[data.length - 1].value : 0;

    const lineChartProps = {
      ...chartConfig,
      data,
      isLoading,
      width: 1140,
      height: 450,
      margin: 20
    };

    const switcherProps = {
      activeIndex: activePeriod,
      items: ['HOURS', 'DAYS'],
      onClick: (index) => this.setState(() => ({
        activePeriod: index,
        isLoading: true
      }), this.fetchChartData)
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

          <Switcher {...switcherProps} />
        </div>
      </section>
    );
  }
}

export default Chart;
