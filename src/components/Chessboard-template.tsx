import { useState } from "react";
import "./Chessboard.css";

const INIT_STATE = [
  new Array(8).fill(0),
  new Array(8).fill(0),
  new Array(8).fill(0),
  new Array(8).fill(0),
  new Array(8).fill(0),
  new Array(8).fill(0),
  new Array(8).fill(0),
  new Array(8).fill(0),
];

export const Chessboard = () => {
  const [board, setBoard] = useState(INIT_STATE);

  const handleClickCount = (rowIndex: number, colIndex: number) => {
    setBoard((prevBoard) =>
      prevBoard.map((row, rIndex) =>
        row.map((value, cIndex) =>
          rIndex === rowIndex && cIndex === colIndex ? value + 1 : value
        )
      )
    );
  };

  const handleReset = () => setBoard(INIT_STATE);

  return (
    <div id="chessboard" className="container">
      <div className="chess-container">
        {board.map((row, indexRow) =>
          row.map((value, indexCol) => {
            // If indexRow % 2 === 0, start with black
            // If indexRow % 2 !== 0, start with white
            const color =
              indexRow % 2 === 0
                ? indexCol % 2
                  ? "black"
                  : "white"
                : indexCol % 2
                ? "white"
                : "black";
            return (
              <div
                key={`${indexRow}, ${indexCol}`}
                className={`block ${color}`}
                onClick={() => handleClickCount(indexRow, indexCol)}
              >
                {/* {`${indexRow}, ${indexCol}`} */}
                {value}
              </div>
            );
          })
        )}
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
