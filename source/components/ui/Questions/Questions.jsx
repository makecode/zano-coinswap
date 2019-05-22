import React from 'react';
import classnames from 'classnames';

const Questions = ({ questions, active, onClick }) => {
  const getQuestions = () => questions.map((question, index) => (
    <li className={classnames('question', { 'active': active === index })} key={index} onClick={() => onClick(index)}>
      <div className='question__header'>
        <span className='question__icon' />
        <h5 className='question__title'>{question.title}</h5>
      </div>
      <p className='question__description'>{question.description}</p>
    </li>
  ));

  return questions.length ? (
    <ul className='questions'>
      {getQuestions()}
    </ul>
  ) : false;
};

Questions.defaultProps = {
  questions: [],
  active: 0
};

export default Questions;
