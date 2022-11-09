import React from "react";
import Answers from "./Answers";
import style from "./style/Question.module.css";
const Questions = ({ answers = [] }) => {
  return answers.map((answer, index) => (
    <div className={style.question} key={index}>
      <div className={style.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        <h1>{answer.title}</h1>
      </div>
      <Answers input={false} options={answer.options} />
    </div>
  ));
};

export default Questions;
