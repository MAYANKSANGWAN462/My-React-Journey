import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import { useState } from "react";
import QUESTION from '../questions.js';


export default function Question({index,onSelectAnswer,onSkipAnswer}) {

  const [answer,setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null
  });

  let timer = 10000;
  if(answer.selectedAnswer){
    timer = 1000;
  }
  if(answer.isCorrect !== null){ //timer for the telling that the answer is correct or wrong
    timer = 2000;
  }
  function handleSelectAnswer(answer){
    setAnswer({
      selectedAnswer: answer,
      isCorrect:null
    })

    setTimeout(() => {
      setAnswer({
        selectedAnswer:answer,
        isCorrect: QUESTION[index].answers[0] === answer,
      })
      setTimeout(() => {
        onSelectAnswer(answer); //will pass it after the 2 second 
      }, 2000);
    }, 1000);
  }

  let answerState = '';
  if(answer.selectedAnswer && answer.isCorrect !== null){ //answer is selected and we want to the show the result
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  }
  else if(answer.selectedAnswer){
    answerState = 'answered';
  }

  return (
    <div id="question">
      <QuestionTimer
        // key={activeQuestionIndex}
        key={timer}
        timeout={timer}
        // onTimeout={handleSkipAnswer} 
        onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}
        mode={answerState}
      />
      {/* whenever the key changes the react will destroy the old component and will create a new component */}
      {/* <h2>{QUESTIONS[activeQuestionIndex].text}</h2> */}
      {/* <h2>{questionText}</h2> */}
      <h2>{QUESTION[index].text}</h2>
      {/* <ul id="answers">
          {shuffledAnswers.current.map((answer) => {
            const isSelected = userAnswers[userAnswers.length - 1] === answer; //it means the options is being selected
            let cssClasses = "";

            if (answerState === "answered" && isSelected) {
              //if the answerstate is answered and is selected then apply the css class
              cssClasses = "selected";
            }
            if (
              (answerState === "correct" || answerState === "wrong") &&
              isSelected
            ) {
              //now based on the isselected = true and also checking that what is the answerstate setting up the css class on the button
              cssClasses = answerState;
            }

            return (
              <li key={answer} className="answer">
                <button
                  onClick={() => handleSelectAnswer(answer)}
                  className={cssClasses}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul> */}
      <Answers
        // key={activeQuestionIndex}
        // answers={QUESTIONS[activeQuestionIndex].answers}
        // selectedAnswer={userAnswers[userAnswers.length - 1]}
        // answerState={answerState}
        // onSelect={handleSelectAnswer}
        // ---------------->>>>>>> changed to ----->>>>>>>
        answers={QUESTION[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        // onSelect={onSelectAnswer}
        onSelect={handleSelectAnswer}
      />
      {/* userAnswers stores all selected answers. userAnswers[userAnswers.length - 1] gives the latest (current question’s) answer. */}
    </div>
  );
}
