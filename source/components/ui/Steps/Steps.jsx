import React from 'react';

import Step from './Step';

class Steps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    }
  }

  render() {
    const { steps } = this.props;
    const { active } = this.state;

    return (
      <div className='steps'>
        {steps.map((step, index) => <Step {...step} active={index === active} key={index} />)}
      </div>
    )
  }
}

export default Steps;
