import React, { useContext, useEffect, useRef } from "react";
import GameContext from "../../context/GameContext";
import Button from "../Button";
import background from "../../assets/images/background.jpg";
import "./modal.scss";
import { motion } from "framer-motion";

function Modal({ open, content }) {
  const { resetGame } = useContext(GameContext);

  if (!open) return null;

  return (
    <div className="modal-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.05,
          type: "spring",
          damping: 20,
        }}
        className="modal"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        {content}
        <Button onclick={resetGame}>Restart</Button>
      </motion.div>
    </div>
  );
}

export default Modal;
