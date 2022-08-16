import React, { useContext } from 'react'
import GameContext from '../context/GameContext'

function StartPage( {handleStartGame} ) {
  const {setDifficulty} = useContext(GameContext);

  function handlebutton(difficulty){
    setDifficulty(difficulty);
    handleStartGame();
  }

  return (
    <div>
        <h1>HILDA MEMORY GAME</h1>
        <button onClick={()=> handlebutton('easy')}>easy</button>
        <button onClick={()=> handlebutton('medium')}>Medium</button>
        <button onClick={()=> handlebutton('hard')}>Hard</button>
    </div>
  )
}

export default StartPage