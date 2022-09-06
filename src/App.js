
import "./styles/App.scss";

import backgroundMP4 from "./assets/images/short.mp4";
import StartPage from "./pages/StartPage";
import { useEffect, useState } from "react";
import GamePage from "./pages/GamePage";
import { GameContextProvider } from "./context/GameContext";
import InfoGame from "./components/InfoGame";
import Loading from "./components/Loading";
import SoundPlay from "./components/SoundPlay";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

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

      {loading ? (
        <Loading />
      ) : (
        <div className="content-main">
          <GameContextProvider>
            {!isStarted ? (
              <StartPage handleStartGame={handleStartGame} />
            ) : (
              <GamePage started={setIsStarted} />
            )}
          </GameContextProvider>

          {/* info */}
          <InfoGame />
          {/* info */}
          <SoundPlay />
        </div>
      )}
    </div>
  );
}
export default App;
