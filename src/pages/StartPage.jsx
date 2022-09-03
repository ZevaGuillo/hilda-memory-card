import React, { useContext } from "react";
import { motion } from "framer-motion";

import Button from "../components/Button";
import NameLogo from "../components/NameLogo";
import GameContext from "../context/GameContext";

function StartPage({ handleStartGame }) {
  const { setDifficulty } = useContext(GameContext);

  function handlebutton(difficulty) {
    setDifficulty(difficulty);
    handleStartGame();
  }

  return (
    <div className="start-page">
      <NameLogo />
      <h1 style={{ display: "none" }}>HILDA MEMORY GAME</h1>

      <motion.div
        initial={{ scale: 0, y: 100, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="difficulty"
      >
        <Button classN="button-easy" onclick={() => handlebutton("easy")}>
          Easy
        </Button>

        <Button classN="button-medium" onclick={() => handlebutton("medium")}>
          Medium
        </Button>

        <Button classN="button-hard" onclick={() => handlebutton("hard")}>
          Hard
        </Button>
      </motion.div>
    </div>
  );
}

export default StartPage;
