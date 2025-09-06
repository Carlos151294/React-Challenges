import React from "react";

import "./Bingo-template.css";

const getRandomInteger = (min: number, max: number) => {
  return Math.ceil(Math.random() * (max - min) + min);
};

const generateColumn = (letter: string, start: number, end: number) => {
  const column: (number | string)[] = [letter];

  while (column.length < 6) {
    const randomNumber = getRandomInteger(start, end);

    if (!column.includes(randomNumber)) {
      column.push(randomNumber);
    }
  }

  return column;
};

const generateBoard = () => {
  return [
    generateColumn("B", 1, 15),
    generateColumn("I", 16, 30),
    generateColumn("N", 31, 45),
    generateColumn("G", 46, 60),
    generateColumn("O", 61, 75),
  ];
};

const Bingo = () => {
  const [board] = React.useState(generateBoard());

  return (
    <div className="bingo-board">
      {board.map((column) => (
        <div>
          {column.map((value) => (
            <span className="square">{value}</span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Bingo;
