import React from 'react'
import Card from '../Card';
import Tilt from 'react-parallax-tilt';
import './cardlist.scss';

function CardList({cards}) {
  return (
    <div className='cards-container'>
        {
            // TODO: Crear context para los estados.
            cards.map( c => (
              <Tilt key={c.id} glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
                <Card character={c}/>
              </Tilt>
            ))
        }
        
    </div>
  )
}

export default CardList