import React, { useContext } from "react";
import CardList from '../components/CardList';
import GameContext from "../context/GameContext";

function GamePage() {
  const { state, isWin, isGameOver, deckOfCards } = useContext(GameContext);

  return (
    <>
      <CardList cards={deckOfCards} />

      <div>
        <h1>score: {state.score}</h1>
        <h1>Best score: {state.bestScore}</h1>
      </div>
      <div>
        {isWin ? (
          <h1>wIN</h1>
        ) : isGameOver ? (
          <h1>Game over</h1>
        ) : (
          <h1>The game</h1>
        )}
      </div>
    </>
  );
}

export default GamePage;
