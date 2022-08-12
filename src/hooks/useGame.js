import { useEffect, useReducer, useState } from "react";
import { isAllClicked, resectCharactes } from "../services/loadImages";
import shuffle from "../utils/shuffle";

const initialState = {
  score: 0,
  bestScore: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_SCORE":
      return {
        ...state,
        score: state.score + 1,
        bestScore:
          state.bestScore < state.score + 1 ? state.score + 1 : state.bestScore,
      };

    case "RESTART":
      return {
        ...state,
        score: 0,
      };
    default:
      //Lanzar un error
      return state;
  }
};

const useGame = (characters) => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [deckOfCards, setDeckOfCards] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isWin, setIsWin] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(()=>{
    setDeckOfCards(shuffle(characters, isAllClicked()));  
  },[])

  useEffect(()=>{
    dispatch({type:'RESTART'})
    setSelectedCards([]);
    resectCharactes();
  }, [isWin,isGameOver])

  useEffect(()=>{
    if (state.score === characters.length) {
      setIsWin(true);
      setIsGameOver(false);
    }  
  }, [state])


  function handleSelectCard(character) {
    if (!selectedCards.includes(character)) {
      setSelectedCards([...selectedCards, character]);
      character.clicked = true;
      dispatch({ type: "ADD_SCORE" })
      
    } else {
      setIsGameOver(true);
      setIsWin(false);
      setSelectedCards([]);
    }
    setDeckOfCards(shuffle(characters, isAllClicked()));
  }

  return {
    state,
    dispatch,
    isWin,
    isGameOver,
    handleSelectCard,
    selectedCards,
    deckOfCards,
    setDeckOfCards
  };
};

export { useGame };
