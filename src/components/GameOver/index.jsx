import React from 'react'
import "./gameover.scss";
import hildaSorry from "../../assets/images/hilda-sorry.png"

function GameOver() {
  return (
    <div className='gameOver-content'>
        <h2><span>Game Over</span></h2>
        <div className='image'>
            <img src={hildaSorry} alt="hilda Sorry" />
        </div>
        {/* <div className='message'>
            <p>
                Congratulations!!
            </p>
        </div> */}
    </div>
  )
}

export default GameOver;