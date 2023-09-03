import React, { useState, useEffect, useReducer, useRef } from 'react';
import styled from 'styled-components';

import { useDataContext } from '../hooks/DataContext';

const StyledQuizBox = styled.div`
  display: inline-block;
  height: fit-content;
  margin-left: 1em;
  text-align: center;
  padding: 1em 0.1em;
  background: #f3f3f3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  position: relative;

  .feedback-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 10em;
    height: 10em;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    z-index: 1;

    &.correct-feedback {
      opacity: 1;
      background-color: #4caf50;
      color: #fff;
    }

    &.wrong-feedback {
      opacity: 1;
      background-color: #ff5733;
      color: #fff;
    }
  }

  .example-container {
    margin: 1em;
    width: 10em;
    height: 10em;
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    z-index: 0;
    position: relative;
  }

  .quiz-title-text {
    font-size: 1em;
    font-weight: bold;
  }

  .quiz-text {
    font-size: 1.3em;
    font-weight: bold;
    padding: 0.6em 0;
  }

  .enter-button {
    width: 10em;
    height: 2em;
    margin-top: 1em;
    background-color: white;
    vertical-align: middle;
    position: relative;
    font-size: 1em;
    font-weight: bold;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border: none;

    &:hover {
      cursor: pointer;
      background-color: black;
      color: white;
    }
  }
`;

const StyledTextInput = styled.input`
  width: 50px;
  font-size: xx-large;
  border: 1px solid #d9d9d9;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`;

interface FeedbackState {
  text: string;
  className: string;
}

type FeedbackAction =
  | { type: 'RESET_FEEDBACK' }
  | { type: 'CORRECT_FEEDBACK' }
  | { type: 'WRONG_FEEDBACK' };

const feedbackReducer = (state:FeedbackState, action:FeedbackAction) => {
  switch (action.type) {
    case 'RESET_FEEDBACK':
      return {text:'', className:''};
    case 'CORRECT_FEEDBACK':
      return {text:'정확해요!', className:'correct-feedback'};
    case 'WRONG_FEEDBACK':
      return {text:'다시 입력해보세요!', className:'wrong-feedback'};
    default:
      return state;
  }
}

const QuizWindow: React.FC = () => {
  const { clickedItem, setClickedItem, setQuizResult } = useDataContext();

  const [answer, setAnswer] = useState('');
  const [feedbackState, dispatchFeedback] = useReducer(feedbackReducer, {text:'', className:''})
  const inputRef = useRef<HTMLInputElement | null>(null);

  const answerHanlder = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  const submitHandler = () => {
    if (clickedItem?.getSymbol() === answer) {
      dispatchFeedback({type:'CORRECT_FEEDBACK'});

      setTimeout(() => {
        dispatchFeedback({type:'RESET_FEEDBACK'});
        setQuizResult([true, clickedItem?.getPosition()]);
        setClickedItem(null);
      }, 1000);
    } else {
      dispatchFeedback({type:'WRONG_FEEDBACK'});
      inputRef.current?.focus();

      setTimeout(() => {
        dispatchFeedback({type:'RESET_FEEDBACK'});
      }, 1000); 
    }

    setAnswer('');
  };
  
  const handleOnKeyDown = (event:React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      submitHandler();
    }
  };

  useEffect(() => {
    setAnswer('');
    dispatchFeedback({type:'RESET_FEEDBACK'});

    if (clickedItem !== null)
      inputRef.current?.focus();
    else
      inputRef.current?.blur();
  }, [clickedItem]);

  return (
    <StyledQuizBox>
      <div className='quiz-title-text'>
        <span>원소 기호를 입력하세요!</span>
      </div>
      <div className='example-container'>
        <div className='quiz-text'>{clickedItem?.getEnglishName()}</div>
        <div className='quiz-text'>{clickedItem ? '?' : ''}</div>
        <div className='quiz-text'>{clickedItem?.getKoreanName()}</div>
        <div className={`feedback-layer ${feedbackState.className}`}>
          <div>{feedbackState.text}</div>
        </div>
      </div>
      <StyledTextInput
        type='text'
        maxLength={2}
        value={answer}
        onChange={answerHanlder}
        onKeyDown={handleOnKeyDown}
        ref={inputRef}
      />
      <br />
      <button type='button' className='enter-button' onClick={submitHandler}>
        Enter
      </button>
    </StyledQuizBox>
  );
};

export default QuizWindow;
