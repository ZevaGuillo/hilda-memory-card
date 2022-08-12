function shuffle(characters) {
  let newArr = [];

  for (let i = 0; i < 3; i++) {
    let randomNumber;
    let isInclude = false;

    while (!isInclude) {
      randomNumber = Math.floor(Math.random() * characters.length);

      let allClicked = newArr.some( c => c.clicked === false);

      if (!newArr.includes(characters[randomNumber]) && allClicked) {
        isInclude = true;
      }
    }

    newArr.push(characters[randomNumber]);
  }
  return newArr;
}

export default shuffle;