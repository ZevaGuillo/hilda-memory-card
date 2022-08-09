import { useEffect } from 'react';
import Card from './components/Card';
import './SCSS/App.scss';

const characters = require('./assets/data.json'); 
function App() {

  useEffect(()=>{
    console.log(characters);
  })

  return (
    <div className="App">
      {
        characters.map( c => <Card character={c} key={c.name} /> )
      }
    </div>
  );
}

export default App;
