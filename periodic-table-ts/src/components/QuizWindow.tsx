import React, { useState } from "react";
import styled from "styled-components";

import { useDataContext } from "../hooks/DataContext";

const StyledQuizBox = styled.div`
  width: 10%;
  height: fit-content;
  display: inline-block;
  margin-left: 3%;
  text-align: center;
  padding: 10px;
  background: #f3f3f3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

  .example-container {
    width: 80%;
    margin: 10%;
    height: 250px;
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }

  .quiz-text {
    font-size: xx-large;
    font-weight: bold;
    padding-top: 35px;
  }
`;

const StyledEnterButton = styled.button`
  width: 150px;
  margin: 1em;
  padding: 0.5em 1em;
  background-color: white;
  vertical-align: middle;
  position: relative;
  font-size: large;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border: none;
`;

const StyledTextInput = styled.input`
  width: 50px;
  font-size: xx-large;
  border: 1px solid #d9d9d9;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`;

const QuizWindow: React.FC = (props) => {
  const { clickedItem } = useDataContext();

  const [answer, setAnswer] = useState('');

  const answerHanlder = (event:React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value)
  }

  const submitHandler = (event: React.MouseEvent) => {
    console.log(clickedItem.getSymbol() === answer);
    console.log(clickedItem.getSymbol(), answer);
    if (clickedItem.getSymbol() === answer) {
      
    }
    setAnswer('');
  }

  return (
    <StyledQuizBox>
      <h3>원소 기호를 입력하세요!</h3>
      <div className="example-container">
        <div className="quiz-text">{clickedItem?.getEnglishName()}</div>
        <div className="quiz-text">{clickedItem? "?" : ""}</div>
        <div className="quiz-text">{clickedItem?.getKoreanName()}</div>
      </div>
      <StyledTextInput type="text" maxLength={2} value={answer} onChange={answerHanlder}/>
      <br />
      <StyledEnterButton onClick={submitHandler}>Enter</StyledEnterButton>
    </StyledQuizBox>
  );
};

export default QuizWindow;
