import React from 'react';
import classnames from 'classnames';

import { Icon, Button } from './../../index';

const Step = ({ classNames, icon, title, active, subtitle, description, button }) => {
  return (
    <div className={classnames('step', classNames, {'step-active': active })}>
      <div className='step-title'>
        <Icon title={icon} />
        <span className='step-title-text'>{title}</span>
        {/*<span className='step-title-active'>*/}
        {/*  <Icon title='step-active' />*/}
        {/*</span>*/}
      </div>
      <h5 className='step-subtitle'>{subtitle}</h5>
      <p className='step-description'>{description}</p>
      {button && <Button className='step-button' blue>
        {button.link ? (<a href={button.link}>{button.title}</a>) : <span>{button.title}</span>}
      </Button>}
    </div>
  )
};

export default Step;
