import React from 'react'

function StartPage( {handleStartGame} ) {
  return (
    <div>
        <h1>HILDA MEMORY GAME</h1>
        <button onClick={handleStartGame}>Start</button>
    </div>
  )
}

export default StartPage