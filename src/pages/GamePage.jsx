import React, { useContext } from "react";
import CardList from "../components/CardList";
import Score from "../components/Score";
import GameContext from "../context/GameContext";
import hildaLogo from "../assets/images/HildaLogo.webp";

function GamePage() {
  const { isWin, isGameOver, deckOfCards, maxScore, selectedCards } =
    useContext(GameContext);

  return (
    <div className="game-page">
      <div className="header">
        <div className="logo">
          <img src={hildaLogo} alt="logo" />
        </div>
        <Score />
      </div>

      <div className="game-cards">
        <CardList cards={deckOfCards} />
        <p>
          {selectedCards.length}/{maxScore}
        </p>
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
    </div>
  );
}

export default GamePage;
