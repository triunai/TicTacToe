import { useState } from "react";

import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
import Log from "./components/Log";

function App() {

  // Defining states up here
  const [gameTurns, setGameTurns] = useState ([]);
  const [ activePlayer, setActivePlayer ] = useState('X');


  // Function to handle selection of boxes
  // Params: Index of the row, Index of the column
  function handleSelectSquare(rowIndex, colIndex) {

    // sets current active player value to X, even if its O its now X
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');

    setGameTurns(prevTurns => {

      let currentPlayer = 'X';

      // only works if there is at least 1 turn executed
      // first element is always latest because of how we use updatedTurns
      // changes the current player to O
      if (prevTurns.length > 0 && prevTurns[0].player === 'X'){
        currentPlayer = 'O';
      }

      // immutable copy  to avoid errors later
      const updatedTurns = [ { square: {row: rowIndex, col: colIndex}  , player : currentPlayer}, ...prevTurns];
 
      return updatedTurns;
    }); 

    console.log(activePlayer);
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
      <Log />
    </main>
  );
}

export default App;
