import { useState } from "react";
import Button from "../Button";
import hildainfo from "../../assets/images/hilda-info.png";
import "./infogame.scss";
import { motion } from "framer-motion";

const transitions = {
  ease: "easeInOut",
  duration: 0.5,
  type: "spring",
  damping: 20,
}

function InfoGame() {
  const [show, setShow] = useState(false);
  const [icon, setIcon] = useState("?");

  const handleButton = () => {
    setShow((s) => !s);

    icon === "?" ? setIcon("X") : setIcon("?");
  };

  return (
    <div className="info">
      {show && (
        <div className="message-info">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              delay:.5,
              ...transitions
            }}
          >
            <p>Don't click on the same card twice!</p>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={transitions}
            src={hildainfo}
            alt="hilda-info"
          />
        </div>
      )}

      <Button classN="info-button" onclick={handleButton}>
        {icon}
      </Button>
    </div>
  );
}

export default InfoGame;
