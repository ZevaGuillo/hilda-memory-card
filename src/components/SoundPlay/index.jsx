import React, { useState } from "react";
import Button from "../Button";
import "./soundPlay.scss";

function SoundPlay() {
  const [icon, setIcon] = useState(true);


  const handleButton = () => {
  
    if(icon){
        setIcon(false)
        window.Howler.mute(true) 
    }else{
        setIcon(true)
        window.Howler.mute(false) 
    }
  };

  return (
    <div className="sound">
      <Button classN="info-button sound-button" onclick={handleButton}>
        {icon?<i className="fas fa-volume-up"></i> : <i class="fas fa-volume-mute"></i>}
      </Button>
    </div>
  );
}

export default SoundPlay;
