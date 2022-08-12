import Card from './components/Card';
import './SCSS/App.scss';
import shuffle from './utils/shuffle';
import { characters, isAllClicked } from './services/loadImages';
import { useGame } from './hooks/useGame';


function App() {

  
  const {
    state,
    dispatch,
    isWin,
    isGameOver,
    handleSelectCard,
    deckOfCards,
    setDeckOfCards
  } = useGame(characters);



  

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
        setDeckOfCards(shuffle(characters, isAllClicked()));
        dispatch({type:"REFRESH"});
      } }>Refresh</button>
      <div>
        {
          isWin ?
            <h1>wIN</h1>
          :isGameOver?
            <h1>Game over</h1>
            :
            <h1>The game</h1>
        }
        
        
      </div>

    </div>
  );
}
export default App;
