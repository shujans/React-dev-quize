import React from "react";

import style from "./style/Illustration.module.css";
import image from "../assets/images/signup.svg";
const Illustration = () => {
  return (
    <div className={style.illustration}>
      <img src={image} alt="Signup" />
    </div>
  );
};

export default Illustration;
