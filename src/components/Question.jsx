import React from 'react'
import { useState } from 'react';

function Question({handlePrev, handleNext, question, choosenOption, buttonText, submitFunc, answers, questionNum}) {
    const [selectedOption, setSelectedOption] = useState(null); 
  return (
    <div className='question-container'>
        <div className='question-text'>{question}</div>
        <div className='options'>
            <div className='opt-row'>
                <div onClick={(e)=>{
                    choosenOption('Half Full');
                    setSelectedOption(1);
                }} className={`choose ${selectedOption==1 ? 'selected' : ''} ${answers[questionNum-1]=='Half Full' ? 'selected' : ''}`}>
                    <div className='top-label-A'>A</div>Half full
                </div>
                <div onClick={(e)=>{
                    choosenOption('Half Empty');
                    setSelectedOption(2);
                }} className={`choose ${selectedOption==2 ? 'selected' : ''} ${answers[questionNum-1]=='Half Empty' ? 'selected' : ''}`}>
                <div className='top-label-B'>B</div>Half Empty
                </div>
            </div>
            <div className='opt-row'>
            <div onClick={(e)=>{
                    choosenOption('Its vodka, not water');
                    setSelectedOption(3);
                }} className={`choose ${selectedOption==3 ? 'selected' : ''} ${answers[questionNum-1]=='Its vodka, not water' ? 'selected' : ''}`}>
            <div className='top-label-C'>C</div>Its vodka, not water
                </div>
                <div onClick={(e)=>{
                    choosenOption("I'd sell the glass");
                    setSelectedOption(4);
                }} className={`choose ${selectedOption==4 ? 'selected' : ''} ${answers[questionNum-1]=="I'd sell the glass" ? 'selected' : ''}`}>
                <div className='top-label-D'>D</div>I'd sell the glass
                </div>
            </div>
            <div className="button-div">
            <button className="question-button" onClick={()=>{
                setSelectedOption(null);
                handlePrev();
            }}>Previous</button>
            <button className="question-button" onClick={()=>{
                setSelectedOption();
                if(buttonText!='Submit'){
                    handleNext();
                }
                else if(buttonText=='Submit'){
                    console.log('submit');
                    submitFunc();
                }
            }}>{buttonText}</button>
        </div>
        </div>
    </div>
  )
}

export default Question