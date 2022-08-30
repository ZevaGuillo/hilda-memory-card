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
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameContext;
