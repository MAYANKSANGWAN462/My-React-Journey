import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  // const shuffledAnswers = useRef();
  // const [answerState, setAnswerState] = useState(""); //no need now as because of he Question.jsx file
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  // const activeQuestionIndex =
  //   answerState === "" ? userAnswers.length : userAnswers.length - 1; //if nothing is string is empty move to next ques otherwise stick to the previous question only

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    // Every time the component renders, handleSelectAnswer is a new reference. This causes handleSkipAnswer to be seen as changed → so handleSkipAnswer also gets re-created. Then any effects or props that use handleSkipAnswer (like a useEffect) also run again — unnecessarily.
    // setAnswerState("answered");
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer]; //maintaining the old state thats why we used the arrow functoin as it is the array and needs the old state also and are adding the new state to it
    });

    // setTimeout(() => {
    //   if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
    //     setAnswerState("correct");
    //   } else {
    //     setAnswerState("wrong");
    //   }

    //   setTimeout(() => {
    //     setAnswerState(""); //resetting the state back to the intial so that we can move to the new question afte the two second which is after we set the answer is wrong or right
    //   }, 2000); //this nested settimeout will run after the fully executoin of hte outside settimeout which is of the 1000 milisecond or of the 1 second
    // }, 1000); //after a second we change the button and tell that whether the answer is correct or wrong
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <Summary userAnswers={userAnswers}/>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex} //as because here the key is the react built in tag so we cannot pass it as the props to the other component so useing the index for it and key is used for maintaining uniqueness
        index={activeQuestionIndex}
        // questionText={QUESTIONS[activeQuestionIndex].text}
        // answers={QUESTIONS[activeQuestionIndex].answers}
        // answerState={answerState}
        // selectedAnswer={userAnswers[userAnswers.length - 1]}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
