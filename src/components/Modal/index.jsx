import React, { useContext } from "react";
import GameContext from "../../context/GameContext";
import Button from "../Button";
import "./modal.scss";

function Modal({ open, content }) {
  const { resetGame } = useContext(GameContext);

  if (!open) return null;

  return (
    <div className="modal-container">
      <div className="modal">
        {content}
        <Button onclick={resetGame}>
            Restart
        </Button>
      </div>
    </div>
  );
}

export default Modal;
