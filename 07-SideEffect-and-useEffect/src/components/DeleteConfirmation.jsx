import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar.jsx";
const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  // const [remainingTime, setRemainingTime] = useState(TIMER);  // <<<<---- moved to the new component ProgressBar.jsx

  // useEffect(() => { // <<<<---- moved to the new component ProgressBar.jsx
  //   const interval =  setInterval(() => {
  //     console.log('TIMER SET');
  //     setRemainingTime((prevTime) => prevTime - 10);
  //   }, 10);

  //   return() => {
  //     clearInterval(interval);
  //   };
  // }, []);

  useEffect(() => {
    console.log("TIMER SET");
    const timer = setTimeout(() => {
      onConfirm();
    }, 3000);

    return () => {
      console.log("Cleaning up the timer...");
      clearTimeout(timer);
    };
  }, [onConfirm]); //on passing the dependencies as the function it will hence create a infinte loop as the value whcih are same in the two differnt function still it will consider the different

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      {/* <progress value={remainingTime} max={TIMER} />  */} {/* // <<<<---- moved to the new component ProgressBar.jsx */}
      <ProgressBar timer={TIMER}/>
    </div>
  );
}
