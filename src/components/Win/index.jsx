import React from 'react'
import "./win.scss";
import hildaWin from "../../assets/images/hilda-Win.png"

function Win() {
  return (
    <div className='win-content'>
        <h2><span>you win</span></h2>
        <div className='image'>
            <img src={hildaWin} alt="hilda win" />
        </div>
        {/* <div className='message'>
            <p>
                Congratulations!!
            </p>
        </div> */}
    </div>
  )
}

export default Win