import React, { useContext } from "react";
import GameContext from "../../context/GameContext";
import './score.scss';

function Score() {
  const { state } = useContext(GameContext);
  return (
    <div className="score">
      <h2>score: {state.score}</h2>
      <h2>Best score: {state.bestScore}</h2>
    </div>
  );
}

export default Score;
