import React from "react";

import "./Tictactoe-template.css";

type Board = (null | Player)[];

enum Player {
  X = "X",
  O = "O",
}

const WINNIN_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const updateBoard = (index: number, newValue: Player, board: Board): Board => {
  return board.map((square, idx) => (index === idx ? newValue : square));
};

const calculateWinner = (board: Board): Player | null => {
  for (let i = 0; i < WINNIN_LINES.length; i++) {
    if (
      board[WINNIN_LINES[i][0]] === board[WINNIN_LINES[i][1]] &&
      board[WINNIN_LINES[i][0]] === board[WINNIN_LINES[i][2]]
    ) {
      return board[WINNIN_LINES[i][0]];
    }
  }

  return null;
};

export const Tictactoe = () => {
  const [board, setBoard] = React.useState<Board>(new Array(9).fill(null));
  const [player, setPlayer] = React.useState<Player>(Player.X);

  const winner = calculateWinner(board);

  const handleClickSquare = (square: number) => {
    // Check is there is a winner
    if (winner) return;

    // Update board
    setBoard((prev) => updateBoard(square, player, [...prev]));

    // Update player
    setPlayer((prev) => (prev === Player.X ? Player.O : Player.X));
  };

  // Display winner or next player
  return (
    <div>
      <div>{winner ? `Winner: ${winner}` : `Next Player: ${player}`}</div>
      <div className="board">
        {board.map((value, idx) => (
          <div className="square" onClick={() => handleClickSquare(idx)}>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};
