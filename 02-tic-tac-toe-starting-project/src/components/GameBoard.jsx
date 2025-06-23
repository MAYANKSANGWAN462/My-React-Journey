// import { act, useState } from "react";


// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];

// export default function GameBoard({onSelectSquare ,activePlayerSymbol}) {  // <<<<---- changed
export default function GameBoard({onSelectSquare, board }) {
  //we need to transfomr the turns array into the intialGameBoard array as it requries the gameBoard
  //----------------------------------------------moved to app.jsx--------------------------------------
  // let gameBoard = initialGameBoard;

  // for(const turn of turns){//now we wnat to extract the turn that occured
  //   const {square , player} = turn;
  //   const {row,col} = square;

  //   gameBoard[row][col] = player; 
  // }
  // -----------------------------------------------------------------------------------------------------
    // const [gameBoard, setgameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex,colIndex){
    //     setgameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol ;
    //         return updatedBoard;
    //     });

    //     onSelectSquare(); //this will be executed when the button is clicked and teh handleSelectSquare fucntion will run then this will also run
    // }

  return (
    <ol id="game-board">
      {/* {gameBoard.map((row, rowIndex) => ( */}
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              // <li key={colIndex}><button onClick={() => handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button></li>  // <<<<---- changed
              <li key={colIndex}><button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button></li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
