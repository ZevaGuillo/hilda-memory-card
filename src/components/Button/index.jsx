import React from "react";
import ReactHowler from "react-howler";
import "./button.scss";
import backsound from "../../assets/sounds/click.wav";

function Button({ children, classN, onclick }) {
  return (
    <button className={`${classN} button`} onClick={onclick}>
      <ReactHowler
        src={backsound}
        preload={false}
        playing={true}
        volume={0.2}
      />
      {children}
    </button>
  );
}

export default Button;
