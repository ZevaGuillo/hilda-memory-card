import React from 'react'
import Card from '../Card'
import './cardlist.scss';

function CardList({cards}) {
  return (
    <div className='cards-container'>
        {
            // TODO: Crear context para los estados.
            
            cards.map( c => <Card character={c} key={c.id} />)
        }
    </div>
  )
}

export default CardList