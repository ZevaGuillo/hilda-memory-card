import { useContext } from "react";
import ReactHowler from "react-howler";
import GameContext from "../../context/GameContext";
import "./Card.scss";
import backsound from "../../assets/sounds/flipcard.mp3";
import { useState } from "react";

function Card({ character, isFlipped, setIsFlipped }) {
  const { handleSelectCard } = useContext(GameContext);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = async () => {
    setIsClicked(true);
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
      <ReactHowler
        src={backsound}
        preload={false}
        playing={isClicked}
        volume={0.2}
      />
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
          <h2>Hilda Memory Game</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
