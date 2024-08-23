import React from "react";
import "./TicTacToe.css";
import circleIcon from "../Assets/Images/circle.png";
import crossIcon from "../Assets/Images/cross.png";

export const TicTacToe = () => {
  return (
    <div className="container">
      <h1 className="title">
        Tic Tac Toe Game In <span>React</span>
      </h1>
      <div className="board">
        <div>
          <button className="reset"><span>reset</span></button>
        </div>
      </div>
    </div>
  );
};
