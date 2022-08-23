import { useContext } from "react";
import GameContext from "../../context/GameContext";

import "./Card.scss";
function Card({ character }) {
  const { handleSelectCard } = useContext(GameContext);

  return (
    <div className="card" onClick={() => handleSelectCard(character)}>
      <img src={character.img} width="640" height="360" alt={character.name} />
      <div className="card-content">
        <h3>{character.name}</h3>
      </div>
    </div>
  );
}

export default Card;
