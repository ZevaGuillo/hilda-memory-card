import "./namelogo.scss";
import React from 'react'
import hildaLogo from '../../assets/images/HildaLogo.webp';


function NameLogo() {
  return (
    <div className='name-logo'>
        <img src={hildaLogo} alt='HILDA MEMORY GAME' />
        <h2>Memory Game</h2>
    </div>
  )
}

export default NameLogo