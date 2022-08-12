function shuffle(characters, allClicked=false) {
  let newArr = [];

  for (let i = 0; i < 3; i++) {
    let randomNumber;
    let isInclude = false;

    while (!isInclude) {
      randomNumber = Math.floor(Math.random() * characters.length);

      

      if (!newArr.includes(characters[randomNumber]) ) {
        isInclude = true;
      }
    }

    newArr.push(characters[randomNumber]);
    
  }

  let allClickedNewArr = newArr.some( c => {
    return c.clicked === false;
  });

  console.log('allclicked',allClickedNewArr )
    
  // console.log('allclickedFuncion',allClicked )

  if(!allClickedNewArr && !allClicked){
    let indexRandom = Math.floor(Math.random() * 3);
    let filterCharacters = characters.filter(c => c.clicked === false );
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

  return newArr;
}

export default shuffle;