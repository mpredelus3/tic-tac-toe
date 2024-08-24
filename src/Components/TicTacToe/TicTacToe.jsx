import React, { useState } from "react";
import "./TicTacToe.css";
import circleIcon from "../Assets/Images/circle.png";
import crossIcon from "../Assets/Images/cross.png";

export const TicTacToe = () => {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [count, setCount] = useState(0);
  const [winner, setWinner] = useState(null);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [wins, setWins] = useState({ player1: 0, player2: 0 });
  const [gameStarted, setGameStarted] = useState(false);
  const [draw, setDraw] = useState(false);

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
        if (newData[a] === "x") {
          setWins({ ...wins, player1: wins.player1 + 1 });
        } else {
          setWins({ ...wins, player2: wins.player2 + 1 });
        }
        return true;
      }
    }
    return false;
  };

  const checkDraw = (newData) => {
    return newData.every((cell) => cell !== "");
  };

  const toggle = (num) => {
    if (winner || data[num] !== "" || draw) {
      return; // Lock the board if there's a winner, draw, or the cell is already occupied
    }

    const newData = [...data];
    newData[num] = count % 2 === 0 ? "x" : "o";
    setData(newData);
    setCount(count + 1);

    if (checkWinner(newData)) {
      return;
    }

    if (checkDraw(newData)) {
      setDraw(true);
    }
  };

  const resetGame = () => {
    setData(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
    setWinner(null);
    setDraw(false);
  };

  const startNewGame = () => {
    setData(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
    setWinner(null);
    setDraw(false);
    setPlayer1("");
    setPlayer2("");
    setWins({ player1: 0, player2: 0 });
    setGameStarted(false);
  };

  const startGame = () => {
    if (player1 && player2) {
      setGameStarted(true);
    }
  };

  return (
    <div className="container">
      {!gameStarted ? (
        <div className="name-entry">
          <h2>Enter Player Names</h2>
          <input
            type="text"
            placeholder="Player 1 Name"
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
          />
          <input
            type="text"
            placeholder="Player 2 Name"
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
          />
          <button className="start-button" onClick={startGame}>
            Start Game
          </button>
        </div>
      ) : (
        <>
          <div className="scoreboard">
            <span>{player1}: {wins.player1} Wins</span>
            <span>{player2}: {wins.player2} Wins</span>
          </div>
          <h1 className="title">
            Tic Tac Toe Game In <span>React</span>
          </h1>
          {winner && (
            <h2 className="winner-announcement">
              {winner === "x" ? player1 : player2} Wins!
            </h2>
          )}
          {draw && (
            <h2 className="draw-announcement">
              It's a draw! Try again.
            </h2>
          )}
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
          <div className="button-container">
            <button className="reset" onClick={resetGame}>
              <span>Reset</span>
            </button>
            <button className="new-game" onClick={startNewGame}>
              <span>New Game</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};
