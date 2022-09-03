import { useContext } from "react";
import GameContext from "../../context/GameContext";

import "./Card.scss";
function Card({ character, isFlipped, setIsFlipped }) {
  const { handleSelectCard } = useContext(GameContext);

  const handleClick = async () => {
    setIsFlipped(true);

    setTimeout(() => {
      handleSelectCard(character);
      setTimeout(() => {
        setIsFlipped(false);
      }, 500);
    }, 500);

  };

  let innerClass = isFlipped ? "card-inner is-flipped" : "card-inner";

  return (
    <div className="card" onClick={handleClick}>
      <div className={innerClass}>
        <div className="card-face card-face-front">
          <img
            src={character.img}
            width="640"
            height="360"
            alt={character.name}
          />
          <div className="card-content">
            <h3>{character.name}</h3>
          </div>
        </div>
        <div className="card-face card-face-back">
          <h2>card back</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
