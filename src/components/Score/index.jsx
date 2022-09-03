import React, { useContext } from "react";
import GameContext from "../../context/GameContext";
import "./score.scss";
import { motion } from "framer-motion";

function Score() {
  const { state } = useContext(GameContext);

  return (
    <motion.div
      initial={{  x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.2,
        type: "spring",
        damping: 20,
      }}
      className="score"
    >
      <h2>score: {state.score}</h2>
      <h2>Best score: {state.bestScore}</h2>
    </motion.div>
  );
}

export default Score;
