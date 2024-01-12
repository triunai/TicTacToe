import { useState } from "react";

import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
import Log from "./components/Log";

// helper function to get state from turns

function deriveActivePlayer(gameTurns){
  
  let currentPlayer = 'X';

  // only works if there is at least 1 turn executed
  // first element is always latest because of how we use updatedTurns
  // changes the second player turn to O, as we ALWAYS check if the length is past 0
  if (gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {

  // Defining states up here
  const [gameTurns, setGameTurns] = useState ([]);
  
  // removed to use less state, replaced with helper function
  // const [ activePlayer, setActivePlayer ] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);

  // Function to handle selection of boxes
  // Params: Index of the row, Index of the column
  function handleSelectSquare(rowIndex, colIndex) {

    // sets current active player value and toggles it
    // setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');

    setGameTurns(prevTurns => {

      const currentPlayer = deriveActivePlayer(prevTurns);

      // immutable copy  to avoid errors later
      const updatedTurns = [ { square: {row: rowIndex, col: colIndex}  , player : currentPlayer}, ...prevTurns];
      
      console.log('This is the current player -nvm remember react updates async-ly ',currentPlayer);
      return updatedTurns;
    }); 

    console.log('This is the active player -from outside the setter',activePlayer);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialPlayerName="PLAYER 1" playerSymbol="X" 
          isActivePlayer={activePlayer === 'X'}/>
          <Player initialPlayerName="PLAYER 2" playerSymbol="O"
          isActivePlayer={activePlayer === 'O'} />
        </ol>
        <Gameboard 
        onSelectSquare = {handleSelectSquare}
        turns = {gameTurns}
        />
      </div>
      <Log
      turns={gameTurns} />
    </main>
  );
}

export default App;
