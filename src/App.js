import "./styles/App.scss";
import backgroundMP4 from "./assets/images/short.mp4";
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
      <div className="video">
        <video autoPlay muted loop className="back-video">
          <source src={backgroundMP4} type="video/mp4" />
        </video>
      </div>
      <div className="content-main">
        <GameContextProvider>
          {!isStarted ? (
            <StartPage handleStartGame={handleStartGame} />
          ) : (
            <GamePage started={setIsStarted} />
          )}
        </GameContextProvider>
      </div>
    </div>
  );
}
export default App;
