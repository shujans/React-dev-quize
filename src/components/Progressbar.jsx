import React, { useRef } from "react";
import style from "./style/Progressbar.module.css";
import Button from "./Button";
import { useState } from "react";

const Progressbar = ({ next, prev, progress, currentQuestion, submit }) => {
  const tooltipRef = useRef();
  const [tootltip, setTooltip] = useState(false);

  function toggleTooltip() {
    if (tootltip) {
      setTooltip(false);

      tooltipRef.current.style.display = "none";
    } else {
      setTooltip(true);
      tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
      tooltipRef.current.style.display = "block";
    }
  }
  return (
    <div className={style.progressBar}>
      <div
        className={currentQuestion > 0 ? style.active : style.backButton}
        onClick={prev}
      >
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={style.rangeArea}>
        <div className={style.tooltip} ref={tooltipRef}>
          {progress}% Cimplete!
        </div>
        <div className={style.rangeBody}>
          <div
            className={style.progress}
            style={{ width: `${progress}%` }}
            onMouseOver={toggleTooltip}
            onMouseOut={toggleTooltip}
          ></div>
        </div>
      </div>

      <Button className={style.next} onClick={progress === 100 ? submit : next}>
        <span>{progress === 100 ? "submit_Quize" : "Next Question"}</span>
        <span className="material-icons-outlined">arrow_forward</span>
      </Button>
    </div>
  );
};

export default Progressbar;
