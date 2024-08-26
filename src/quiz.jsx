import React, { useRef, useState } from "react";
import Question from "./components/Question";
import logo from '/icon.png'
import toast from "react-hot-toast";

function Quiz() {
  const [question, setquestion] = useState(1);
  const [answers, setAnswers] = useState([]);

  const handleNext = () => {
    if(answers[question-1]){
      setquestion((prevquestion) => Math.min(prevquestion + 1, 4));
    }
    else {
      toast.error('Please select an option');
    }
  };

  const handlePrev = () => {
    setquestion((prevquestion) => Math.max(prevquestion - 1, 1));
  };

  const chooseAnswer = (value) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[question - 1] = value;
      return newAnswers;
    });
  };

  const submitFunc = () => {
    console.log(answers); //array of answers of 4 questions answered by user
  }

  return (
    <div className="all">
      <div className="navbar">
      <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-items">
          <a className="gradient-text" href="">Home</a>
          <a className="gradient-text" href="">Quiz</a>
          <a className="gradient-text" href="">About</a>
        </div>
      </div>
    <div className="question-container-wrapper">
      <div className="question-content">
        {question==1 && <div className="slide">
          <Question handlePrev={handlePrev} handleNext={handleNext} question='If you have a glass of water' choosenOption={(value)=>{
            chooseAnswer(value);
          }} buttonText='Next' answers={answers} questionNum={question}/>
        </div>}
        {question==2 && <div className="slide">
          <Question handlePrev={handlePrev} handleNext={handleNext} question='question2' choosenOption={(value)=>{
            chooseAnswer(value);
          }} buttonText='Next' answers={answers} questionNum={question}/>
        </div>}
        {question==3 && <div className="slide">
          <Question handlePrev={handlePrev} handleNext={handleNext} question='question3' choosenOption={(value)=>{
            chooseAnswer(value);
          }} buttonText='Next' answers={answers} questionNum={question}/>
        </div>}
        {question==4 && <div className="slide">
          <Question handlePrev={handlePrev} handleNext={handleNext} question='question4' choosenOption={(value)=>{
            chooseAnswer(value);
          }} buttonText='Submit' submitFunc={()=>{
            submitFunc();
          }} answers={answers} questionNum={question}/>
        </div>}
      </div>
    </div>
    </div>
  );
}
export default Quiz;