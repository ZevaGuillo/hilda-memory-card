import React, { createContext } from "react";
import { useGame } from "../hooks/useGame";

const GameContext = createContext({});

export function GameContextProvider({ children }) {
  const { state, isWin, isGameOver, handleSelectCard, deckOfCards, setDifficulty } = useGame();

  return (
    <GameContext.Provider value={{
        state,
        isWin,
        isGameOver,
        handleSelectCard,
        deckOfCards,
        setDifficulty
    }}>
        {children}
    </GameContext.Provider>
  )
}

export default GameContext;
