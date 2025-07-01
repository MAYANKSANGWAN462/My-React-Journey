import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  // const [timeExpired, setTimeExpired] = useState(false); //now no need
  // const [timeStarted, setTimeStarted] = useState(false); //now no need
  const [timeRemaining,setTimeRemaining] = useState(targetTime * 1000);

  // function handleStart() { // ---->>>> changement made to i
  //   setTimeStarted(true);
  //   timer.current = setTimeout(() => {
  //     setTimeExpired(true);
  //     // dialog.current.showModal(); //using the useImperativeHandle();
  //     dialog.current.open();
  //   }, targetTime * 1000);
  // }
  const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  //this is to show when the time get expired and we wont stopped the challenge
  if(timeRemaining <= 0){ //be carefull when updating the state outside the functoin ****************
    clearInterval(timer.current); //clear all the interval which was earlier due to the start of the earlier challenge
    // setTimeRemaining(targetTime*1000); //set again to the default timing
    dialog.current.open(); //this will show the pop up when time is not remaining
  }
  function handleReset(){
    setTimeRemaining(targetTime*1000); //set again to the default timing
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
    },10);
  }

  function handleStop() { //this is used to handle if we stop the challenge 
    dialog.current.open(); //this will show the pop up when we stop the challenge
    clearInterval(timer.current);
  }
  return (
    <>
      {/* {timeExpired && <ResultModal targetTime={targetTime} result="Lost" />} */}
      {/* <ResultModal ref={dialog} targetTime={targetTime} result="Lost" /> */}
      <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset}/>
      <section className="challenge">
        <h2>{title}</h2>
        {/* {timeExpired && <p>You Lost!</p>} */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeIsActive ? handleStop : handleStart}>
            {timeIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timeIsActive ? "active" : undefined}>
          {timeIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
