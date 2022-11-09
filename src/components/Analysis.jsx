import React from "react";
import Questions from "./Questions";
import style from "./style/Analysis.module.css";
const Analysis = ({ answers }) => {
  return (
    <div className={style.analysis}>
      <h1>Question Analysis</h1>
      <Questions answers={answers} />
    </div>
  );
};

export default Analysis;
