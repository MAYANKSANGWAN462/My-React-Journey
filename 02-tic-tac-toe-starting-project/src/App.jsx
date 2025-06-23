import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from './winning-combinations.js'
import GameOver from "./components/GameOver.jsx";

const PLAYERS = {
    X: 'Player 1',
    O: 'Player 2',
  }
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){ //previous player is X so the currentplayer is O
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function deriveGameBoard(gameTurns){
  // let gameBoard = INITIAL_GAME_BOARD; // <<<<---- changed solved the bug
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

  for(const turn of gameTurns){//now we wnat to extract the turn that occured
    const {square , player} = turn;
    const {row,col} = square;

    gameBoard[row][col] = player; 
  }
  return gameBoard;

}

function deriveWinner(gameBoard,players){
  let winner;
  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
      // winner = firstSquareSymbol; // <<<<--- changed
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}

function App() {
  const [players , setPlayers] = useState(PLAYERS);

  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setactivePlayer] = useState('X'); // <<<<--- changed

  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns); // <<-- made the function above for it

  const winner = deriveWinner(gameBoard,players); // <<-- made the function above for it
  const hasDraw = gameTurns.length === 9; // for the condtion to handle the draw in the game

  function handleSelectSquare(rowIndex,colIndex){
    // setactivePlayer((curAcitvePlayer) => curAcitvePlayer === 'X' ? 'O' : 'X'); //  <<<<--- changed
    setGameTurns((prevTurns)=>{
      let currentPlayer = 'X';

      if(prevTurns.length > 0 && prevTurns[0].player === 'X'){ //previous player is X so the currentplayer is O
        currentPlayer = 'O';
      }

      const updatedTurns = [ {square :{ row:rowIndex, col:colIndex }, player : currentPlayer} ,...prevTurns,]; //hree the player is obtained by the above method and not by the directly the activePlayer as we will not be having the gurantee of the working in the active state
      return updatedTurns;
    });
  }

  function handleRestart(){ //in order to make the rematch button work again
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName){
    setPlayers(prevPlayers => {
      return({
        ...prevPlayers, // keep all current player names
        [symbol] : newName,  // update only the one that's changed
      });
    });

  }
  return (
    <main>
      <div id="game-container">
        <ol id="players"  className="highlight-player">
          {/* <Player initailName={"Player 1"} symbol={"X"} isActive={activePlayer === 'X'}  onChangeName={handlePlayerNameChange}/> */}
          <Player initailName={PLAYERS.X} symbol={"X"} isActive={activePlayer === 'X'}  onChangeName={handlePlayerNameChange}/>
          {/* <Player initailName={"Player 2"} symbol={"O"} isActive={activePlayer === 'O'}  onChangeName={handlePlayerNameChange}/> */}
          <Player initailName={PLAYERS.O} symbol={"O"} isActive={activePlayer === 'O'}  onChangeName={handlePlayerNameChange}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        {/* <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>  <<<--- changed*/}
        {/* <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/> */}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App
