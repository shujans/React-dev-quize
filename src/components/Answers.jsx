import React, { Fragment } from "react";
import style from "./style/answers.module.css";
import CheckBox from "./CheckBox";
const Answers = ({ options = [], handleChange, input }) => {
  return (
    <div className={style.answers}>
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <CheckBox
              key={index}
              className={style.answer}
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(e) => handleChange(e, index)}
            />
          ) : (
            <CheckBox
              key={index}
              className={`${style.answer} ${
                option.correct
                  ? style.correct
                  : option.checked
                  ? style.wrong
                  : null
              }`}
              text={option.title}
              value={index}
              defaultChecked={option.checked}
              disabled
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Answers;
