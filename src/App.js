import { useEffect, useState } from 'react';
import Card from './components/Card';
import './SCSS/App.scss';

const characters = require('./assets/data.json'); 
function App() {

  const [deckOfCards, setDeckOfCards] = useState([]);

  useEffect(()=>{
    setDeckOfCards(shuffle(characters));
  },[])

  return (
    <div className="App">
      {
        deckOfCards.map( c => <Card character={c} key={c.name} /> )
      }
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
