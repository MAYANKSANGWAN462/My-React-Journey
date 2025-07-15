import { useRef } from "react";
export default function Answers({ answers, selectedAnswer, answerState ,onSelect}) {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    //if the shuffledAnswer is undefined then only define it
    shuffledAnswers.current = [...answers]; //copy of the answers array using the spread operator
    shuffledAnswers.current.sort(() => Math.random() - 0.5); // .sort() reorders the elements in an array in place (it modifies the array).
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer; //it means the options is being selected
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
            //   onClick={() => handleSelectAnswer(answer)}
              onClick={() => onSelect(answer)}
              className={cssClasses}
              disabled={answerState !== ''}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
