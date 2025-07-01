import { useState,useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName,setEnteredPlayerName] = useState(''); 
  // const [submitted,setSubmitted] = useState(false); // <<<---NO NEED

  // function handleChange(event){  //<<<--- NO NEED
  //   setSubmitted(false);
  //   setEnteredPlayerName(event.target.value);
  // }

  function handleClick(){
    // setSubmitted(true);
    setEnteredPlayerName(playerName.current.value); //value getting directly from teh input field and the input and the useRef is now connected
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName :'unknown entity'} </h2>
      <p>
        {/* <input ref={playerName} type="text" onChange={handleChange} value={enteredPlayerName}/> */}
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
