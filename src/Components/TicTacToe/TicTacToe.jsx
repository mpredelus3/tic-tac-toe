import React, { useState } from "react";
import "./TicTacToe.css";
import circleIcon from "../Assets/Images/circle.png";
import crossIcon from "../Assets/Images/cross.png";

export const TicTacToe = () => {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [count, setCount] = useState(0);
  const [winner, setWinner] = useState(null);

  const winningCombinations = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top left
    [2, 4, 6], // Diagonal from top right
  ];

  const checkWinner = (newData) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (newData[a] && newData[a] === newData[b] && newData[a] === newData[c]) {
        setWinner(newData[a]);
        return true;
      }
    }
    return false;
  };

  const toggle = (num) => {
    if (winner || data[num] !== "") {
      return; // Lock the board if there's a winner or the cell is already occupied
    }

    const newData = [...data];
    newData[num] = count % 2 === 0 ? "x" : "o";
    setData(newData);
    setCount(count + 1);

    if (checkWinner(newData)) {
      return;
    }
  };

  const resetGame = () => {
    setData(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
    setWinner(null);
  };

  return (
    <div className="container">
      <h1 className="title">
        Tic Tac Toe Game In <span>React</span>
      </h1>
      {winner && <h2 className="winner-announcement">{winner.toUpperCase()} Wins!</h2>}
      <div className="board">
        <div className="row">
          {data.slice(0, 3).map((item, index) => (
            <div key={index} className="boxes" onClick={() => toggle(index)}>
              {item === "x" && <img src={crossIcon} alt="x" />}
              {item === "o" && <img src={circleIcon} alt="o" />}
            </div>
          ))}
        </div>
        <div className="row">
          {data.slice(3, 6).map((item, index) => (
            <div key={index + 3} className="boxes" onClick={() => toggle(index + 3)}>
              {item === "x" && <img src={crossIcon} alt="x" />}
              {item === "o" && <img src={circleIcon} alt="o" />}
            </div>
          ))}
        </div>
        <div className="row">
          {data.slice(6, 9).map((item, index) => (
            <div key={index + 6} className="boxes" onClick={() => toggle(index + 6)}>
              {item === "x" && <img src={crossIcon} alt="x" />}
              {item === "o" && <img src={circleIcon} alt="o" />}
            </div>
          ))}
        </div>
      </div>
      <button className="reset" onClick={resetGame}>
        <span>Reset</span>
      </button>
    </div>
  );
};
