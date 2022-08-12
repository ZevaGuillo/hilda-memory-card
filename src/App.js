import { useEffect, useState } from 'react';
import Card from './components/Card';
import './SCSS/App.scss';
import shuffle from './utils/shuffle';
import { characters } from './services/loadImages';
import { useGame } from './hooks/useGame';


function App() {

  const [deckOfCards, setDeckOfCards] = useState([]);
  const {
    state,
    dispatch,
    handleSelectCard,
    selectedCards
  } = useGame();



  useEffect(()=>{
    setDeckOfCards(shuffle(characters));
    console.log(selectedCards)
  },[selectedCards])

  return (
    <div className="App">
      {
        deckOfCards.map( c => <Card character={c} key={c.id} handleSelectCard={handleSelectCard} /> )
      }
      <div>
        <h1>score: {state.score}</h1>
        <h1>Best score: {state.bestScore}</h1>
      </div>
      <button onClick={()=> {
        setDeckOfCards(shuffle(characters))
        dispatch({type:"REFRESH"});
      } }>Refresh</button>
      <div>
        {
          state.isWin ?
            <h1>wIN</h1>
          :state.isGameOver?
            <h1>Game over</h1>
            :
            <h1>The game</h1>
        }
        
        
      </div>

    </div>
  );
}
export default App;
