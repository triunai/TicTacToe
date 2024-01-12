import { useState } from "react";

export default function Player({ initialPlayerName, playerSymbol, isActivePlayer }) {

  // state of playerName and a way to set it
  const [playerName, setPlayerName ] = useState(initialPlayerName);
  // using boolean to to initially not edit player and to now show an input field
  const [isEditing, setIsEditing] = useState(false);

  const playerClass = isActivePlayer ? 'active' : undefined

  const editingStatus = isEditing ? 'Save' : 'Edit' 

  function handleEditClick() {
    setIsEditing(isEditing => !isEditing); 
  }

  function handlePlayerChange(event){
    console.log(event)
    setPlayerName(event.target.value);
  }

  return (
    <li className={playerClass}>
      <span className="player">
        {/* Renders input if isEditing is true, else renders player name */}
        {isEditing ? (
          <input 
          type="text" 
          value={playerName}  
          onChange={handlePlayerChange} 
          required />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={handleEditClick}>{editingStatus}</button>
    </li>
  );
}
