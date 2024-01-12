import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard({ onSelectSquare , activePlayerSymbol}) {

    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // needs to take symbol, too complex so X first
    // immutable updates - meaning ur updating a copy. not the direct memory(reference type)
      function handleSelectSquare(rowIndex, columnIndex) {
        setGameBoard((prevGameBoard) => {
          // we make copies of the gameBoard, as its a reference type, meaning we're not manipulating our direct array, but its copy to avoid issues
          const updatedBoard = [
            ...prevGameBoard.map((innerArray) => [...innerArray]),
          ];

          // just gives X to every square
          updatedBoard[rowIndex][columnIndex] = activePlayerSymbol;
          return updatedBoard;
        });

        onSelectSquare();
    }

  return (
    <ol id="game-board">
      {/* Not strictly typed, not tied to data, tied to position of data, no issue cuz we arent swapping rows */}

      {/* Maps through rows first */}
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {/* Then, maps through columns, creatin a button */}
            {row.map((playerSymbol, columnIndex) => (
              <li key={columnIndex}>
                {/* When clicked this button calls handleSelectSquare */}
                <button
                  onClick={() => handleSelectSquare(rowIndex, columnIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
