import React, { useRef } from "react";
import ReactPlayer from "react-player/youtube";
import style from "./style/Miniplayer.module.css";
// import thambnail from "../assets/images/3.jpg";
import { useState } from "react";

const Miniplayer = ({ id, title }) => {
  const buttonRef = useRef();
  const [status, setStatus] = useState();
  const videoURL = `https://www.youtube.com/watch?v=${id}`;

  function toggleMiniplayer() {
    if (!status) {
      buttonRef.current.classList.remove(style.floatingBtn);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(style.floatingBtn);
      setStatus(false);
    }
  }
  return (
    <div
      className={`${style.miniPlayer} ${style.floatingBtn}`}
      ref={buttonRef}
      onClick={toggleMiniplayer}
    >
      <span className={`material-icons-outlined ${style.open}`}>
        play_circle_filled
      </span>
      <span
        className={`material-icons-outlined ${style.close}`}
        onClick={toggleMiniplayer}
      >
        close
      </span>
      {/* <img
        className={style.player}
        src={thambnail}
        alt="This is Player Thabnail"
      /> */}

      <ReactPlayer
        className={style.player}
        url={videoURL}
        width="300px"
        height="168px"
        playing={status}
        controls
      />
      <p>{title}</p>
    </div>
  );
};

export default Miniplayer;
