import "./SCSS/App.scss";
import StartPage from "./pages/StartPage";
import { useState } from "react";
import GamePage from "./pages/GamePage";
import { GameContextProvider } from "./context/GameContext";

function App() {
  const [isStarted, setIsStarted] = useState(false);

  function handleStartGame() {
    setIsStarted(true);
  }

  return (
    <div className="App">
      <GameContextProvider>
        {!isStarted ? (
          <StartPage handleStartGame={handleStartGame} />
        ) : (
          <GamePage />
        )}
      </GameContextProvider>
    </div>
  );
}
export default App;
