import { getCharactersDifficulty, isAllClicked } from "../services/loadImages";
import { getDifficulty } from "./getLegthDifficulty";

function shuffle(difficulty) {
  let newArr = [];
  let list = getCharactersDifficulty(difficulty);
  let length = getDifficulty(difficulty);
  let allClicked = isAllClicked(list);

  for (let i = 0; i < length; i++) {
    let randomNumber;
    let isInclude = false;

    while (!isInclude) {
      randomNumber = Math.floor(Math.random() * list.length);

      if (!newArr.includes(list[randomNumber])) {  
        isInclude = true;
      }
    }

    newArr.push(list[randomNumber]);
    
  }
  

  let allClickedNewArr = newArr.some( c => {
    return c.clicked === false;
  });

  console.log('allclicked',allClickedNewArr )
    
  // console.log('allclickedFuncion',allClicked )

  if(!allClickedNewArr && !allClicked){
    let indexRandom = Math.floor(Math.random() * 3);
    let filterCharacters = list.filter(c => c.clicked === false );
    try {
      console.log(...newArr,'ff')
      newArr[indexRandom] = filterCharacters[Math.floor(Math.random() * filterCharacters.length)]  
      console.log(newArr,'ff2')
    } catch (error) {
      console.log('ya clickeaste todo');
    }
  }else{
    console.log('Todo completo')
  }

  console.log('new arra ', list);
  return newArr;
}

export default shuffle;