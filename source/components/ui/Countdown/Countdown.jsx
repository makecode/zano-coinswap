import React from 'react';

class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.futureDate = new Date('30 July 2019, 12:00:00 UTC').getTime();
    this.timer = null;

    this.state = {
      distance: {
        days: [ 0, 0 ],
        hours: [ 0, 0 ],
        minutes: [ 0, 0 ],
        seconds: [ 0, 0 ]
      }
    }
  }

  componentDidMount() {
    this.timeout = setInterval(this.updateDistance, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  updateDistance = () => {
    const distance = this.calculateTime();

    this.setState(() => ({
      distance
    }));
  };

  calculateTime = () => {
    const currentTime = new Date().getTime();
    // difference with future date and current time
    const dist = this.futureDate - currentTime;

    const distance = {
      days: [ 0, 0 ],
      hours: [ 0, 0 ],
      minutes: [ 0, 0 ],
      seconds: [ 0, 0 ]
    };

    distance.days = Math.floor(dist / (1000 * 60 * 60 * 24)).toString().split('');
    distance.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().split('');
    distance.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60)).toString().split('');
    distance.seconds = Math.floor((dist % (1000 * 60)) / 1000).toString().split('');

    return distance;
  };

  render() {
    const { distance } = this.state;

    return (
      <div className='countdown'>
        <h4 className='countdown-title'>Coinswap ends in</h4>
        <div className='countdown-time'>
          <div className='countdown-section'>
            <span className='countdown-section-data'>
              {distance.days.map((el, index) => (<span className='countdown-item' key={index}>{el}</span>))}
            </span>
            <span className='countdown-section-title'>Days</span>
          </div>
          <div className='countdown-section'>
            <span className='countdown-section-data'>
              {distance.hours.map((el, index) => (<span className='countdown-item' key={index}>{el}</span>))}
            </span>
            <span className='countdown-section-title'>Hours</span>
          </div>
          <div className='countdown-section'>
            <span className='countdown-section-data'>
              {distance.minutes.map((el, index) => (<span className='countdown-item' key={index}>{el}</span>))}
            </span>
            <span className='countdown-section-title'>Minutes</span>
          </div>
          <div className='countdown-section'>
            <span className='countdown-section-data'>
              {distance.seconds.map((el, index) => (<span className='countdown-item' key={index}>{el}</span>))}
            </span>
            <span className='countdown-section-title'>Seconds</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Countdown;
