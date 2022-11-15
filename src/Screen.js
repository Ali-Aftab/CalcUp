import React from "react";
import { Textfit } from "react-textfit";
import "./Screen.css";

const Screen = ({ value }) => {
  return (
    <React.Fragment>
      <Textfit className="screen screen-static" mode="single" max={70}>
        {value.title}
      </Textfit>
      <Textfit className="screen screen-nonstatic" mode="single" max={70}>
        {value.result}
      </Textfit>
    </React.Fragment>
  );
};

export default Screen;
