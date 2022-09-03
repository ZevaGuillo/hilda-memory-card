import React, { useContext } from "react";
import { motion } from "framer-motion";
import CardList from "../components/CardList";
import Score from "../components/Score";
import GameContext from "../context/GameContext";
import hildaLogo from "../assets/images/HildaLogo.webp";
import Modal from "../components/Modal";
import Win from "../components/Win";
import GameOver from "../components/GameOver";

function GamePage({ started }) {
  const { isWin, isGameOver, deckOfCards, maxScore, selectedCards, resetGameState } =
    useContext(GameContext);

  const viewModal = () => {
    if (isWin) {
      return <Modal open={true} content={<Win />} />;
    } else if (isGameOver) {
      return <Modal open={true} content={<GameOver />} />;
    }
  };

  return (
    <div className="game-page">
      <div className="header">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            type: "spring",
            damping: 20,
          }}
          className="logo"
          onClick={() => {
            resetGameState();
            started(false);
          }}
        >
          <img src={hildaLogo} alt="logo" />
        </motion.div>
        <Score />
      </div>

      <motion.div
        initial={{ scale: 0, x: -50, opacity: 0 }}
        animate={{ x: 0, scale: 1, opacity: 1 }}
        transition={{
          duration: 0.2,
          type: "spring",
          damping: 20,
        }}
        className="game-cards"
      >
        <CardList cards={deckOfCards} />
        <p>
          {selectedCards.length}/{maxScore}
        </p>
      </motion.div>

      <div>{viewModal()}</div>
    </div>
  );
}

export default GamePage;
