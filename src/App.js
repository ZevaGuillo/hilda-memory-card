import { useEffect, useState } from 'react';
import Card from './components/Card';
import './SCSS/App.scss';

const characters = require('./assets/data.json'); 
function App() {

  const [deckOfCards, setDeckOfCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestscore, setBestScore] = useState(0);

  function validateBestscore (){
    if(bestscore < score){
      setBestScore(score);
    }
  }

  function handleSelectCard(character){
    if(!selectedCards.includes(character)){
      setSelectedCards([
        ...selectedCards,
        character
      ]);
      setScore(score+1);
    }else{
      console.log('Game over');
      setSelectedCards([]);
      validateBestscore();
      setScore(0);
    }    
  }

  useEffect(()=>{
    console.log(selectedCards)
    setDeckOfCards(shuffle(characters));
  },[selectedCards])

  return (
    <div className="App">
      {
        deckOfCards.map( c => <Card character={c} key={c.name} handleSelectCard={handleSelectCard} /> )
      }
      <div>
        <h1>score: {score}</h1>
        <h1>Best score: {bestscore}</h1>
      </div>
      
    </div>
  );
}

function shuffle(characters){
  let newArr = [];

  for(let i = 0; i < 3; i++){
    let randomNumber;
    let isInclude = false;

    while(!isInclude){
      randomNumber = Math.floor(Math.random() * characters.length);
      if(!newArr.includes(characters[randomNumber])){
        isInclude = true;
      }
    }

    newArr.push(characters[randomNumber]);
  }
  return newArr;
}

export default App;
