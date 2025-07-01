import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function ResultModal({ ref, targetTime ,remainingTime,onReset}) {
  const dialogRef = useRef();

  const userLost = remainingTime <= 0;
  const fomrmattedRemainingTime = (remainingTime/1000).toFixed(2);
  const score = Math.round((1- (remainingTime/(targetTime*1000)))*100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal(); //now instead of the this line witht the help of this functoin we will be able to write it like dialogRef.current.showModal(); -->> dialogRef.current.open(); in the TimerChallenge.jsx
      },
    };
  });
  return createPortal(
    // <dialog className="result-modal" open >
    <dialog ref={dialogRef} className="result-modal">
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>You Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{fomrmattedRemainingTime} Seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
}
