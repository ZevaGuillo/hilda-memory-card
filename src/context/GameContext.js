import React, { createContext } from "react";
import { useGame } from "../hooks/useGame";

const GameContext = createContext({});

export function GameContextProvider({ children }) {
  const {
    state,
    isWin,
    isGameOver,
    selectedCards,
    handleSelectCard,
    deckOfCards,
    setDifficulty,
    maxScore,
    resetGame,
    resetGameState
  } = useGame();

  return (
    <GameContext.Provider
      value={{
        state,
        isWin,
        isGameOver,
        selectedCards,
        handleSelectCard,
        deckOfCards,
        setDifficulty,
        maxScore,
        resetGame,
        resetGameState
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameContext;
