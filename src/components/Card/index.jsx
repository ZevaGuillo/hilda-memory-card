import { useContext } from 'react';
import GameContext from '../../context/GameContext';
import './Card.scss';
function Card({character}) {

  const {handleSelectCard} = useContext(GameContext);

  return (
    <div className="card" onClick={()=>handleSelectCard(character)}>
        <h3>{character.name}</h3>
        <img src={character.img}  width="640" height="360" alt={character.name}/>
    </div>
  );
}

export default Card;