import React, { createContext } from "react";
import { useGame } from "../hooks/useGame";

const GameContext = createContext({});

export function GameContextProvider({ children }) {
  const { state, isWin, isGameOver, handleSelectCard, deckOfCards } = useGame();

  return (
    <GameContext.Provider value={{
        state,
        isWin,
        isGameOver,
        handleSelectCard,
        deckOfCards
    }}>
        {children}
    </GameContext.Provider>
  )
}

export default GameContext;
