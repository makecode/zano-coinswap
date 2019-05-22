import React from 'react';
import classnames from 'classnames';

const Title = (props) => {
  return (
    <h1 className={classnames('title', { 'centred': props.centred, 'small': props.small })}>
      {props.title.map((word, index) => (
        <span className={classnames('title__word', { 'blue': word.blue })} key={index}>{word.title}</span>
      ))}
      <span className={classnames('title__shadow', props.shadowAlign)}>{props.shadow}</span>
    </h1>
  )
};

export default Title;
