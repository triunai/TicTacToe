import { useState } from "react";

import Player from "./components/Player";
import Gameboard from "./components/Gameboard";

function App() {

  const [ activePlayer, setActivePlayer ] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');

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
        activePlayerSymbol = {activePlayer}/>
      </div>
    </main>
  );
}

export default App;
