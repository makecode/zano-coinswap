import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Switcher = ({ items, activeIndex, onClick }) => (
  <div className='switcher'>
    {items.map((item, index) => (
      <span
        className={classnames('switcher__item', { 'active': index === activeIndex })}
        onClick={() => index === activeIndex ? false : onClick(index)}
        key={index}>
        {item}
      </span>))}
  </div>
);

Switcher.defaultProps = {
  items: [],
  activeIndex: 0,
  onClick: (index) => console.log(index)
};

Switcher.propTypes = {
  items: PropTypes.array.isRequired,
  activeIndex: PropTypes.number,
  onClick: PropTypes.func
};

export default Switcher;
