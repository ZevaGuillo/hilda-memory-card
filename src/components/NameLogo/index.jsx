import {motion} from 'framer-motion';
import hildaLogo from "../../assets/images/HildaLogo.webp";
import "./namelogo.scss";

function NameLogo() {

  

  return (
    <motion.div
     initial={{scale:0, y:-100, opacity:0}}
     animate={{y:0, scale:1, opacity:1}}
     transition={{
      type: 'spring',
      stiffness: 260,
      damping: 20
     }}
     className="name-logo" >
      <img src={hildaLogo} alt="HILDA MEMORY GAME" />
      <h2>Memory Game</h2>
    </motion.div>
  );
}

export default NameLogo;
