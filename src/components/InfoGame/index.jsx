import { useState } from 'react';
import Button from '../Button';
import hildainfo from '../../assets/images/hilda-info.png';
import './infogame.scss';

function InfoGame() {
  const [show, setShow] = useState(false);
  const [icon, setIcon] = useState('?');

  const handleButton = ()=>{
    setShow((s)=>!s);

    icon === '?'? setIcon('X'):setIcon('?') 

  }

  return (
    <div className='info'>
        {
            show && (
                <div className='message-info'>
                    <div>
                        <p>Don't click on the same card twice!</p>
                    </div>
                    <img src={hildainfo} alt="hilda-info"/>
                </div>
            )
        }
        
        <Button classN='info-button' onclick={handleButton}>{icon}</Button>

    </div>
  )
}

export default InfoGame