import { v4 as uuidv4 } from "uuid";

import hildaImg from "../assets/images/characters/hilda.webp";
import johannaImg from "../assets/images/characters/Johanna.webp";
import fridaImg from "../assets/images/characters/Frida.webp";
import davidImg from "../assets/images/characters/David.webp";
import alfurImg from "../assets/images/characters/Alfur-Aldric.webp";
import twigImg from "../assets/images/characters/Twig.webp";
import woodmanImg from "../assets/images/characters/Woodman.webp";
import kaisaImg from "../assets/images/characters/Kaisa.webp";
import ErikAlhbergImg from "../assets/images/characters/Erik-Alhberg.webp";
import gerdaImg from "../assets/images/characters/Gerda-Gustav.webp";

const characters = [
  {
    id: uuidv4(),
    name: "Hilda",
    img: hildaImg,
    clicked: true,
  },
  {
    id: uuidv4(),
    name: "Johanna",
    img: johannaImg,
    clicked: true,
  },
  {
    id: uuidv4(),
    name: "Frida",
    img: fridaImg,
    clicked: true,
  },
  {
    id: uuidv4(),
    name: "David",
    img: davidImg,
    clicked: false,
  },
  {
    id: uuidv4(),
    name: "Alfur Aldric",
    img: alfurImg,
    clicked: false,
  },
  {
    id: uuidv4(),
    name: "Twig",
    img: twigImg,
    clicked: false,
  },
  {
    id: uuidv4(),
    name: "Woodman",
    img: woodmanImg,
    clicked: false,
  },
  {
    id: uuidv4(),
    name: "Kaisa",
    img: kaisaImg,
    clicked: false,
  },
  {
    id: uuidv4(),
    name: "Erik Alhberg",
    img: ErikAlhbergImg,
    clicked: false,
  },
  {
    id: uuidv4(),
    name: "Gerda Gustav",
    img: gerdaImg,
    clicked: false,
  },
];

const characterEasy = getCharacters(5);
const characterMedium = getCharacters(7);
const characterHard = getCharacters(10);

function getCharacters(length) {
  let newArr = [];

  for (let i = 0; i < length; i++) {
    let randomNumber;
    let isInclude = false;
    while (!isInclude) {
      randomNumber = Math.floor(Math.random() * characters.length);

      if (!newArr.includes(characters[randomNumber])) {
        isInclude = true;
      }
    }
    newArr.push(characters[randomNumber]);
  }
  
  return newArr;
}

function getCharactersDifficulty(difficulty){
    switch (difficulty) {
        case 'easy':
            return characterEasy;
        case 'medium':
            return characterMedium;
        case 'hard':
            return characterHard;
        default:
            break;
    }
}

function resectCharactes() {
  characters.forEach((c) => {
    c.clicked = false;
  });
//   console.log("resetCharactes", characters);
}

function isAllClicked(list) {
  let allchicked = list.filter((c) => c.clicked === false);
  console.log(
    list.map((c) => {
      return {
        click: c.clicked,
        name: c.name,
      };
    })
  );

  return allchicked.length === 0;
}

export { characters, getCharacters, resectCharactes, isAllClicked, getCharactersDifficulty };
