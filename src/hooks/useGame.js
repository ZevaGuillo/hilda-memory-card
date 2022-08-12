import { useEffect, useReducer, useState } from "react";

const initialState = {
  score: 0,
  bestScore: 0,
  isWin: false,
  isGameOver: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_SCORE":
      return {
        ...state,
        score: state.score + 1,
        bestScore:
          state.bestScore < state.score ? state.score : state.bestScore,
      };
    case "GAME_OVER":
      return {
        ...state,
        score: 0,
        bestScore:
          state.bestScore < state.score ? state.score : state.bestScore,
        isGameOver: true,
      };
    case "WIN":
      return {
        ...state,
        bestScore:
          state.bestScore < state.score ? state.score : state.bestScore,
        isWin: true,
      };

    case "REFRESH":
      return {
        ...state,
        isWin: false,
        isGameOver: false,
      };

    case "RESTART":
      return initialState;
    default:
      //Lanzar un error
      return state;
  }
};

const useGame = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.score === 10) {
      dispatch({ type: "WIN" });
      setSelectedCards([]);
    }
  }, [selectedCards, state]);

  function handleSelectCard(character) {
    if (!selectedCards.includes(character)) {
      character.clicked = true;
      setSelectedCards([...selectedCards, character]);
      dispatch({ type: "ADD_SCORE" });
    } else {
      dispatch({ type: "GAME_OVER" });
      setSelectedCards([]);
    }
  }

  return {
    state,
    dispatch,
    handleSelectCard,
    selectedCards,
  };
};

export { useGame };
