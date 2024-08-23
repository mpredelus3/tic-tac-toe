import React, { useState } from "react";
import "./TicTacToe.css";
import circleIcon from "../Assets/Images/circle.png";
import crossIcon from "../Assets/Images/cross.png";

export const TicTacToe = () => {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);

  const toggle = (num) => {
    if (lock || data[num] !== "") {
      return;
    }
    const newData = [...data];
    if (count % 2 === 0) {
      newData[num] = "x";
    } else {
      newData[num] = "o";
    }
    setData(newData);
    setCount(count + 1);
  };

  const resetGame = () => {
    setData(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
    setLock(false);
  };

  return (
    <div className="container">
      <h1 className="title">
        Tic Tac Toe Game In <span>React</span>
      </h1>
      <div className="board">
        <div className="row">
          {data.map((item, index) => (
            <div key={index} className="boxes" onClick={() => toggle(index)}>
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
