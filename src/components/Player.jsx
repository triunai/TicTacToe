import { useState } from "react";

export default function Player({ playerName, playerSymbol }) {
  // using boolean to to initially not edit player and to now show an input field
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(!isEditing); 
  }

  return (
    <li>
      <span className="player">
        {/* Renders input if isEditing is true, else renders player name */}
        {isEditing ? (
          <input type="text" required/>
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}
