import { useState } from "react";

export default function Player({ initailName, symbol , isActive,onChangeName }) {
  const [playerName,setplayerName] = useState(initailName);
  const [isEditing, setisEditing] = useState(false);
  
  
  function handleEditClick() {
    // setisEditing(!isEditing); // as this will be working with the delay (a little delay) but delay is delay //or better option is 
    setisEditing(editing => !editing ); //this is the function and in react it will run with the no delay
    if(isEditing === true){
      onChangeName(symbol,playerName);
    }
  }
  function handleChange(event){
    setplayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = 'Edit';
  if(isEditing){
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
    btnCaption = 'Save';
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
