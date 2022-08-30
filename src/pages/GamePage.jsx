import React, { useContext } from "react";
import CardList from "../components/CardList";
import Score from "../components/Score";
import GameContext from "../context/GameContext";
import hildaLogo from "../assets/images/HildaLogo.webp";
import Modal from "../components/Modal";
import Win from "../components/Win";
import GameOver from "../components/GameOver";

function GamePage({started}) {
  const { isWin, isGameOver, deckOfCards, maxScore, selectedCards } = useContext(GameContext);

  const viewModal = ()=>{
    if(isWin){
      return <Modal open={true} content={<Win/>}/>
    }else if (isGameOver){
      return <Modal open={true} content={<GameOver/>}/>
    }
  }

  return (
    <div className="game-page">
      <div className="header">
        <div className="logo" onClick={()=>started(false)}>
          <img src={hildaLogo} alt="logo" />
        </div>
        <Score />
      </div>

      <div className="game-cards">
        <CardList cards={deckOfCards} />
        <p>
          {selectedCards.length}/{maxScore}
        </p>
      </div>

      <div>
        {viewModal()}
      </div>
    </div>
  );
}

export default GamePage;
