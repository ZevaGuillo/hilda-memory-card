import { v4 as uuidv4 } from 'uuid';

import hildaImg from '../assets/images/hilda.webp';
import johannaImg from '../assets/images/Johanna.webp';
import fridaImg from '../assets/images/Frida.webp';
import davidImg from '../assets/images/David.webp';
import alfurImg from '../assets/images/Alfur-Aldric.webp';
import twigImg from '../assets/images/Twig.webp';
import woodmanImg from '../assets/images/Woodman.webp';
import kaisaImg from '../assets/images/Kaisa.webp';
import ErikAlhbergImg from '../assets/images/Erik-Alhberg.webp';
import gerdaImg from '../assets/images/Gerda-Gustav.webp';



const characters = [
    {
        id: uuidv4(),
        name: "Hilda",
        img: hildaImg,
        clicked: false,
    },
    {
        id: uuidv4(),
        name: "Johanna",
        img: johannaImg,
        clicked: false,
    },
    {
        id: uuidv4(),
        name: "Frida",
        img: fridaImg,
        clicked: false,
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
    // {
    //     id: uuidv4(),
    //     name: "Twig",
    //     img: twigImg,
    //     clicked: false,
    // },
    // {
    //     id: uuidv4(),
    //     name: "Woodman",
    //     img: woodmanImg,
    //     clicked: false,
    // },
    // {
    //     id: uuidv4(),
    //     name: "Kaisa",
    //     img: kaisaImg,
    //     clicked: false,
    // },
    // {
    //     id: uuidv4(),
    //     name: "Erik Alhberg",
    //     img: ErikAlhbergImg,
    //     clicked: false,
    // },
    // {
    //     id: uuidv4(),
    //     name: "Gerda Gustav",
    //     img: gerdaImg,
    //     clicked: false,
    // }
]


export {characters}