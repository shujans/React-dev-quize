import React from "react";

import style from "./style/Textinput.module.css";
const Textinput = ({ icon, ...rest }) => {
  return (
    <div className={style.textInput}>
      <input {...rest} />
      <span className="material-icons-outlined"> {icon}</span>
    </div>
  );
};

export default Textinput;
