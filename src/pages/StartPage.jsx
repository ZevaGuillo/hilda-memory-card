import React, { useContext } from "react";
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

      <div className="difficulty">
        <Button classN="button-easy" onclick={() => handlebutton("easy")}>
          Easy
        </Button>

        <Button classN="button-medium" onclick={() => handlebutton("medium")}>
          Medium
        </Button>

        <Button classN="button-hard" onclick={() => handlebutton("hard")}>
          Hard
        </Button>
      </div>
    </div>
  );
}

export default StartPage;
